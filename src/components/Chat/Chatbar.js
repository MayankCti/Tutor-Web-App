import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleChatBar,toggleSlider } from "../../redux/reducers/messageReducer";
import ChatList from "./ChatList";

const Chatbar = () => {
  const dispatch = useDispatch();
  const { isSlider } = useSelector((state) => state?.messageReducer);
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
                    className="ct_fs_24 ct_fw_700 mb-0" style={{cursor:"pointer"}}
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
                    class="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Search"
                    aria-label="search"
                  />
                  <i class="fa-solid fa-magnifying-glass ct_search_icon_top"></i>
                </div>
                <ChatList />
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
                {/* chat-list */}
                <ChatList />
                {/* chat-list */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbar;
