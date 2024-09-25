import { debounce } from "lodash";
import ChatList from "./ChatList";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveChatDetail,
  toggleSlider,
} from "../../redux/reducers/messageReducer";
import {
  chatMessages,
  fetchAllStudentChatList,
  fetchAllTeacherChatList,
  fetchChatList,
  fetchOutsideChatList,
  startChat,
} from "../../redux/actions/messagesActions";
import {
  checkPage,
  pipGetStudentProfile,
  pipGetTeacherProfile,
} from "../../utils/pip";

const Chatbar = ({ socket, pageName = "" }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { isSlider, allStudentList, chatList } = useSelector(
    (state) => state?.messageReducer
  );

  const debouncedSetSearchTerm = debounce((value) => {
    setSearchTerm(value);
  }, 500);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[0] === " ") {
      const trimmedValue = value.trim();
      setInputValue(trimmedValue);
      debouncedSetSearchTerm(trimmedValue);
    } else {
      setInputValue(value);
      debouncedSetSearchTerm(value);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      if (checkPage(pageName)) {
        dispatch(fetchAllTeacherChatList(searchTerm));
      } else {
        dispatch(fetchAllStudentChatList(searchTerm));
      }
    }
  }, [searchTerm]);

  const handleStartChat = (id) => {
    checkPage(pageName)
      ? dispatch(fetchOutsideChatList())
      : dispatch(fetchChatList());
    const callback = (response) => {
      if (response.success) {
        dispatch(
          checkPage(pageName) ? fetchOutsideChatList() : fetchChatList()
        );
        dispatch(setActiveChatDetail(response?.data));
        dispatch(
          chatMessages({
            payload: {
              chat_id: response?.data?.id,
            },
          })
        );
      }
    };

    const data = checkPage(pageName)
      ? {
          student_id: pipGetStudentProfile()?.id,
          teacher_id: id,
        }
      : {
          student_id: id,
          teacher_id: pipGetTeacherProfile()?.id,
        };
    dispatch(
      startChat({
        payload: data,
        callback,
      })
    );
  };

  const handleGetChatMessages = (item) => {
    checkPage(pageName)
      ? dispatch(fetchOutsideChatList())
      : dispatch(fetchChatList());
    dispatch(setActiveChatDetail(item));
    dispatch(
      chatMessages({
        payload: {
          chat_id: item?.id,
        },
      })
    );
  };

  const [searchTerm1, setSearchTerm1] = useState("");
  return (
    <>
      <div className=" col-xl-4">
        <div className="chatlist">
          <div className="modal-dialog-scrollable">
            <div className="modal-content">
              <div
                className={`ct_add_member_popup ${
                  isSlider ? "ct_add_popup_active" : ""
                }`}
              >
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <h4 className="ct_fs_24 ct_fw_700 mb-0 ">Add Member</h4>
                  <h4
                    className="ct_fs_24 ct_fw_700 mb-0"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(toggleSlider(false));
                      setInputValue("");
                      debouncedSetSearchTerm("");
                    }}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </h4>
                </div>
                <div className="msg-search mb-4" style={{ flex: "1 " }}>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Search"
                    onChange={handleChange}
                    value={inputValue}
                  />
                  <i className="fa-solid fa-magnifying-glass ct_search_icon_top"></i>
                </div>
                <div className="ct_add_user_message_list_34">
                  <ChatList
                    socket={socket}
                    isDisplay={false}
                    data={allStudentList}
                    handleClick={handleStartChat}
                    pageName={pageName}
                  />
                </div>
              </div>
              <div className="chat-header">
                <div className="d-flex align-items-center gap-2">
                  <div className="msg-search" style={{ flex: "1 " }}>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Search"
                      aria-label="search"
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value[0] === " ") {
                          setSearchTerm1(value.trim());
                        } else {
                          setSearchTerm1(value);
                        }
                      }}
                      value={searchTerm1}
                    />
                    <i className="fa-solid fa-magnifying-glass ct_search_icon_top"></i>
                  </div>
                  <div
                    className="ct_add_user"
                    onClick={() => {
                      dispatch(toggleSlider(true));
                    }}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>

              <div className="modal-body mt-4">
                <ChatList
                  socket={socket}
                  data={chatList}
                  handleClick={handleGetChatMessages}
                  searchTerm1={searchTerm1}
                  pageName={pageName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbar;
