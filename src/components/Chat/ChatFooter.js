import React, { useEffect, useState } from "react";
import {
  checkPage,
  pipGetStudentProfile,
  pipGetTeacherProfile,
} from "../../utils/pip";
import { useSelector } from "react-redux";

const ChatFooter = ({ socket, pageName = "" }) => {
  const [message, setMessage] = useState("");
  const { activeChatDetail } = useSelector((state) => state?.messageReducer);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      return;
    } else {
      const data = checkPage(pageName)
        ? {
            content: message,
            sender_teacher_id: null,
            sender_student_id: pipGetStudentProfile()?.id,
            student_id: pipGetStudentProfile()?.id,
            teacher_id: activeChatDetail?.teacher?.id,
          }
        : {
            content: message,
            sender_teacher_id: pipGetTeacherProfile().id,
            sender_student_id: null,
            student_id: activeChatDetail?.student?.id,
            teacher_id: pipGetTeacherProfile().id,
          };
      socket.emit("chat message", data);
      setMessage("");
    }
  };

  return (
    <>
      <div className="send-box">
        <form action="" className="position-relative">
          <input
            type="text"
            className="form-control ct_text_indent_15 w-100"
            aria-label="message…"
            placeholder="Type message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="d-flex align-items-center ct_send_btn_position">
            <button type="submit" onClick={handleSendMessage}>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatFooter;
