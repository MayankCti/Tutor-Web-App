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
  fetchChatList,
  startChat,
} from "../../redux/actions/messagesActions";
import { pipGetTeacherProfile } from "../../utils/pip";

const Chatbar = ({ socket }) => {
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
    setInputValue(value);
    debouncedSetSearchTerm(value);
  };

  useEffect(() => {
    dispatch(fetchAllStudentChatList(searchTerm));
  }, [searchTerm]);

  const handleStartChat = (id) => {
    const callback = (response) => {
      if (response.success) {
        dispatch(fetchChatList());
        dispatch(setActiveChatDetail(response?.data));
        dispatch(
          chatMessages({
            payload: {
              chat_id: response?.data?.id,
            },
          })
        );
        console.log({ response: response?.data });
      }
    };
    dispatch(
      startChat({
        payload: {
          student_id: id,
          teacher_id: pipGetTeacherProfile()?.id,
        },
        callback,
      })
    );
  };

  const handleGetChatMessages = (item) => {
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
      <div class=" col-xl-4">
        <div class="chatlist">
          <div class="modal-dialog-scrollable">
            <div class="modal-content">
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
                    }}
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </h4>
                </div>
                <div class="msg-search mb-4" style={{ flex: "1 " }}>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Search"
                    onChange={handleChange}
                    value={inputValue}
                  />
                  <i class="fa-solid fa-magnifying-glass ct_search_icon_top"></i>
                </div>
                <div className="ct_add_user_message_list_34">
                  <ChatList
                  socket={socket}
                    isDisplay={false}
                    data={allStudentList}
                    handleClick={handleStartChat}
                  />
                </div>
              </div>
              <div class="chat-header">
                <div className="d-flex align-items-center gap-2">
                  <div class="msg-search" style={{ flex: "1 " }}>
                    <input
                      type="text"
                      class="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Search"
                      aria-label="search"
                      onChange={(e) => setSearchTerm1(e.target.value)}
                      value={searchTerm1}
                    />
                    <i class="fa-solid fa-magnifying-glass ct_search_icon_top"></i>
                  </div>
                  <div
                    className="ct_add_user"
                    onClick={() => {
                      dispatch(toggleSlider(true));
                    }}
                  >
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>

              <div class="modal-body mt-4">
                <ChatList
                  socket={socket}
                  data={chatList}
                  handleClick={handleGetChatMessages}
                  searchTerm1={searchTerm1}
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
