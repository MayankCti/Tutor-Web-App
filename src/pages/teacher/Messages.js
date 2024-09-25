import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import socketIO from "socket.io-client";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import Chatbar from "../../components/Chat/Chatbar";
import Chatbody from "../../components/Chat/Chatbody";
import {
  fetchAllStudentChatList,
  fetchChatList,
} from "../../redux/actions/messagesActions";
import { BASE_URL } from "../../routes/endPoints";
import { pipGetAccessToken } from "../../utils/pip";
const socket = socketIO.connect(`${BASE_URL}`, {
  auth: {
    token: pipGetAccessToken(), // Send the token here
  },
});

const Messages = () => {
  const dispatch = useDispatch();
  const { isToggle } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(fetchAllStudentChatList());
    dispatch(fetchChatList());
  }, []);

  return (
    <>
      <main className={isToggle ? "ct_collapsed_sidebar" : ""}>
        <Sidebar />
        <div className="ct_right_content">
          <Headers />
          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg  ct_message_scroll_h_remove">
              <div className=" px-xxl-4">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">Messages</h4>
                </div>
                <section className="message-area">
                  <div className="chat-area row">
                    <Chatbar socket={socket} />
                    <Chatbody socket={socket} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Messages;
