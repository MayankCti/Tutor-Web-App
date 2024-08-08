import React from "react";

const ChatFooter = () => {
  return (
    <>
      <div class="send-box">
        <form action="" class="position-relative">
          <input
            type="text"
            class="form-control ct_text_indent_15 w-100"
            aria-label="message…"
            placeholder="Type message"
          />
          <div class="d-flex align-items-center ct_send_btn_position">
            <div class="send-btns">
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
            </div>
            <button type="button">
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatFooter;
