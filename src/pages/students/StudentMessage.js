import socketIO from "socket.io-client";
import { BASE_URL } from "../../routes/endPoints";
import React, { useEffect, useState } from "react";
import { checkPage, pipGetAccessToken } from "../../utils/pip";
import Chatbar from "../../components/Chat/Chatbar";
import Chatbody from "../../components/Chat/Chatbody";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../layout/studentLayout/Header";
import SideBar from "../../layout/studentLayout/SideBar";
import Logout from "../../components/studentComponent/Logout";
import {
  fetchAllStudentChatList,
  fetchAllTeacherChatList,
  fetchChatList,
  fetchOutsideChatList,
} from "../../redux/actions/messagesActions";
import { useLocation } from "react-router-dom";
import Loader from "../../components/other/Loader";

// Socket connection
const socket = socketIO.connect(`${BASE_URL}`, {
  auth: {
    token: pipGetAccessToken(), // Shared access token
  },
});

function StudentMessage() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const pageName = useLocation()?.pathname?.split("/")?.[1];
  const { isLoading } = useSelector((state) => state?.messageReducer);

  const sidebarActive = () => {
    setActive(!active);
  };


  useEffect(() => {
    if (checkPage(pageName)) {
      dispatch(fetchAllTeacherChatList());
      dispatch(fetchOutsideChatList());
    } else {
      dispatch(fetchAllStudentChatList());
      dispatch(fetchChatList());
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <main className={active ? "" : "ct_collapsed_sidebar"}>
        <SideBar onToggleSidebar={sidebarActive} />
        <div className="ct_right_content">
          <Header onToggleSidebar={sidebarActive} />

          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg  ct_message_scroll_h_remove">
              <div className=" px-xxl-4">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">Messages</h4>
                </div>
                <section className="message-area">
                  <div className="chat-area row">
                    <Chatbar socket={socket} pageName={pageName} />
                    <Chatbody socket={socket} pageName={pageName} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Logout />
    </>
  );
}

export default StudentMessage;
