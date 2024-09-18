import React, { useEffect, useState } from "react";
import { pipGetAccessToken, pipGetTeacherProfile } from "../../utils/pip";
import { useDispatch, useSelector } from "react-redux";
import { setFilterChatList } from "../../redux/reducers/messageReducer";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { activeChatDetail, chatList } = useSelector(
    (state) => state?.messageReducer
  );

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message) {
      const data = {
        content: message,
        sender_teacher_id: pipGetTeacherProfile().id,
        sender_student_id: null,
        student_id: activeChatDetail?.student?.id,
        teacher_id: pipGetTeacherProfile().id,
      };
      console.log({ socketObj: data });
      socket.emit("chat message", data);
    }
    setMessage("");
  };

  return (
    <>
      <div class="send-box">
        <form action="" class="position-relative">
          <input
            type="text"
            class="form-control ct_text_indent_15 w-100"
            aria-label="message…"
            placeholder="Type message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div class="d-flex align-items-center ct_send_btn_position">
            {/* <div class="send-btns">
              <div class="attach">
                <div class="button-wrapper">
                  <span class="label">
                    <i class="fa-solid fa-link"></i>
                  </span>
                  <input
                    type="file"
                    name="upload"
                    id="upload"
                    class="upload-box"
                    placeholder="Upload File"
                    aria-label="Upload File"
                  />
                </div>
              </div>
            </div> */}
            <button type="submit" onClick={handleSendMessage}>
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatFooter;
