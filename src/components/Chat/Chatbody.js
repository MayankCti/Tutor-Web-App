import moment from "moment";
import ChatFooter from "./ChatFooter";
import BlankMessage from "../other/BlankMessage";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterChatList,
  toggleChatBar,
} from "../../redux/reducers/messageReducer";
import {
  checkPage,
  getTimeView,
  pipGetStudentProfile,
  pipGetTeacherProfile,
} from "../../utils/pip";

const Chatbody = ({ socket, pageName = "" }) => {
  const dispatch = useDispatch();
  let lastMessageDate = null;
  const [isOnline, setIsOnline] = useState(false);
  const { isToggle, chats, activeChatDetail } = useSelector(
    (state) => state?.messageReducer
  );

  const [messages, setMessages] = useState([...chats]);

  useEffect(() => {
    setMessages([...chats]);
    console.log({ messages, chats });
  }, [chats]);

  useEffect(() => {
    socket.on("chat message", (data) => {
      setMessages([...messages, data]);
      if (activeChatDetail) {
        dispatch(setFilterChatList());
      }
    });
  }, [socket, messages]);

  const formatDate = (date) => {
    const messageDate = moment(date);
    const today = moment().startOf("day");
    const yesterday = moment().subtract(1, "days").startOf("day");

    if (messageDate.isSame(today, "d")) {
      return "Today";
    } else if (messageDate.isSame(yesterday, "d")) {
      return "Yesterday";
    } else {
      return messageDate.format("MMMM D, YYYY"); // Display full date
    }
  };

  const studentId = checkPage(pageName)
    ? pipGetStudentProfile()?.id
    : activeChatDetail?.student?.id ?? null;
  const teacherId = checkPage(pageName)
    ? activeChatDetail?.teacher?.id ?? null
    : pipGetTeacherProfile()?.id;

  const roomId = `${studentId}-${teacherId}`;

  useEffect(() => {
    if (!activeChatDetail || activeChatDetail.length <= 0 || !roomId) {
      return;
    }
    socket.emit("join_room", { roomId });

    const handleUserStatusChange = (status) => {
      const { userId, is_online, last_seen } = status;
      setIsOnline(is_online);
      console.log("User status change detected:", {
        userId,
        is_online,
        last_seen
      });
    };
    socket.on("user-status-change", handleUserStatusChange);

    return () => {
      socket.off("user-status-change", handleUserStatusChange);
      socket.emit("leave_room", { roomId });
    };
  }, [activeChatDetail, roomId, socket]);

  return (
    <>
      <div className=" col-xl-8">
        {/* chatbox */}
        <div class={`chatbox ${isToggle ? "showbox" : ""}`}>
          {isToggle ? (
            <div className="modal-dialog-scrollable">
              <div className="modal-content">
                <div className="msg-head">
                  <div className="row">
                    <div className="col-8">
                      <div className="d-flex align-items-center">
                        <span
                          className="chat-icon"
                          onClick={() => {
                            dispatch(toggleChatBar(false));
                          }}
                        >
                          <i className="fa-solid fa-chevron-left"></i>
                        </span>
                        <div className="flex-shrink-0">
                          <img
                            className="img-fluid ct_img_36"
                            src={
                              checkPage(pageName)
                                ? activeChatDetail?.teacher?.profile_image ??
                                  "../assets/img/user_profile.png"
                                : activeChatDetail?.student?.profile_image ??
                                  "../assets/img/user_profile.png"
                            }
                            alt="user img"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h3 className="mb-0 ct_fs_16 ct_ff_roboto ct_fw_600 text-capitalize">
                            {checkPage(pageName)
                              ? `${activeChatDetail?.teacher?.full_name}`
                              : `${activeChatDetail?.student?.first_name} ${activeChatDetail?.student?.last_name}`}
                          </h3>
                          <p className="mb-0 ct_fs_12 ct_ff_roboto">
                            {isOnline ? "Online" : "Offline"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="msg-body">
                    <ul>
                      {messages?.length != 0 ? (
                        messages?.map((item, index) => {
                          const messageDate = formatDate(item.created_at);

                          const showDateDivider =
                            messageDate !== lastMessageDate;
                          lastMessageDate = messageDate;

                          return (
                            <>
                              {showDateDivider && (
                                <li>
                                  <div className="divider">
                                    <h6>{messageDate}</h6>
                                  </div>
                                </li>
                              )}
                              {(
                                checkPage(pageName)
                                  ? item?.sender_student_id
                                  : item?.sender_teacher_id
                              ) ? (
                                <li className="repaly">
                                  <div>
                                    <p>{item?.content}</p>
                                    <span className="time">
                                      {getTimeView(item?.created_at)}
                                    </span>
                                  </div>
                                </li>
                              ) : (
                                <li className="sender">
                                  <div>
                                    <p>{item?.content}</p>
                                    <span className="time">
                                      {getTimeView(item?.created_at)}
                                    </span>
                                  </div>
                                </li>
                              )}
                            </>
                          );
                        })
                      ) : (
                        <BlankMessage />
                      )}
                    </ul>
                  </div>
                </div>
                <ChatFooter socket={socket} pageName={pageName} />
              </div>
            </div>
          ) : (
            <BlankMessage
              lable="Please select
                User"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Chatbody;
