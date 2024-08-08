import React from "react";
import Chatbar from "../components/Chat/Chatbar";
import Chatbody from "../components/Chat/Chatbody";

const Messages = () => {
  return (
    <>
      <div class="ct_inner_dashbaord_main">
        <div class="ct_white_bg ct_mt_28">
          <div class=" px-xxl-4">
            <div class="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
              <h4 class="ct_fs_22 ct_ff_roboto ct_fw_600">Messages</h4>
            </div>
            <section class="message-area">
              <div class="chat-area row">
                <Chatbar />
                <Chatbody />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
