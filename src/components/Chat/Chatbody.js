import React from "react";
import ChatFooter from "./ChatFooter";

const Chatbody = () => {
  return (
    <>
      <div class=" col-xl-8">
        {/* chatbox */}
        <div class="chatbox ">
          <div class="modal-dialog-scrollable">
            <div class="modal-content">
              <div class="msg-head">
                <div class="row">
                  <div class="col-8">
                    <div class="d-flex align-items-center">
                      <span class="chat-icon">
                        <i class="fa-solid fa-chevron-left"></i>
                      </span>
                      <div class="flex-shrink-0">
                        <img
                          class="img-fluid ct_img_36"
                          src="assets/img/user_profile.png"
                          alt="user img"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="mb-0 ct_fs_16 ct_ff_roboto ct_fw_600">
                          Mehedi Hasan
                        </h3>
                        <p class="mb-0 ct_fs_12 ct_ff_roboto">Pesquisar chat</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <ul class="moreoption">
                      <li class="navbar nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Delete Chat
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="modal-body">
                <div class="msg-body">
                  <ul>
                    <li class="sender">
                      <img
                        src="assets/img/user_profile.png"
                        alt=""
                        class="ct_img_30"
                      />
                      <div>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,{" "}
                        </p>
                        <span class="time">10:06 am</span>
                      </div>
                    </li>
                    <li class="repaly">
                      <div>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </p>
                        <span class="time">10:20 am</span>
                      </div>
                      <img
                        src="assets/img/user_profile.png"
                        alt=""
                        class="ct_img_30"
                      />
                    </li>
                    <li class="sender">
                      <img
                        src="assets/img/user_profile.png"
                        alt=""
                        class="ct_img_30"
                      />
                      <div>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,{" "}
                        </p>
                        <span class="time">10:06 am</span>
                      </div>
                    </li>
                    <li class="repaly">
                      <div>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </p>
                        <span class="time">10:20 am</span>
                      </div>
                      <img
                        src="assets/img/user_profile.png"
                        alt=""
                        class="ct_img_30"
                      />
                    </li>
                    <li>
                      <div class="divider">
                        <h6>Today</h6>
                      </div>
                    </li>

                    <li class="repaly">
                      <div>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </p>
                        <span class="time">10:20 am</span>
                      </div>
                      <img
                        src="assets/img/user_profile.png"
                        alt=""
                        class="ct_img_30"
                      />
                    </li>
                    <li class="repaly">
                      <div>
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </p>
                        <span class="time">10:20 am</span>
                      </div>
                      <img
                        src="assets/img/user_profile.png"
                        alt=""
                        class="ct_img_30"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <ChatFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbody;
