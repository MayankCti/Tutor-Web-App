import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import Chatbar from "../../components/Chat/Chatbar";
import Chatbody from "../../components/Chat/Chatbody";

const Messages = () => {
  const { isToggle } = useSelector((state) => state.authReducer);
  return (
    <>
      <main className={isToggle ? "ct_collapsed_sidebar" : ""}>
        <Sidebar />
        <div className="ct_right_content">
          <Headers />
          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg ct_mt_28">
              <div className=" px-xxl-4">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">Messages</h4>
                </div>
                <section className="message-area">
                  <div className="chat-area row">
                    <Chatbar />
                    <Chatbody />
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
