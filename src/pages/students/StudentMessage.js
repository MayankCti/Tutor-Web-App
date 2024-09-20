import React, { useState } from "react";
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import Logout from "../../components/studentComponent/Logout";

function StudentMessage() {

  const [active, setActive] = useState(true);
  const sidebarActive = () => {
    setActive(!active);
  };

  return (
    <>
     <main className={ active ? "" : "ct_collapsed_sidebar"}>
        <SideBar onToggleSidebar={sidebarActive} />
        <div className="ct_right_content">
          <Header onToggleSidebar={sidebarActive} />
          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg ct_mt_28">
              <div className=" px-xxl-4">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">Messages</h4>
                </div>
                <section className="message-area">
                  <div className="chat-area row">
                    <div className=" col-xl-12">
                      {/* chatbox */}
                      <div className="chatbox ct_student_chat_box">
                        <div className="modal-dialog-scrollable">
                          <div className="modal-content">
                            <div className="msg-head">
                              <div className="row">
                                <div className="col-8">
                                  <div className="d-flex align-items-center">
                                    <span className="chat-icon">
                                      <i className="fa-solid fa-chevron-left" />
                                    </span>
                                    <div className="flex-shrink-0">
                                      <img
                                        className="img-fluid"
                                        src="../assets/img/user_1.png"
                                        alt="user img"
                                      />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      <h3 className="mb-0 ct_fs_16 ct_ff_roboto ct_fw_600">
                                        Mehedi Hasan
                                      </h3>
                                      <p className="mb-0 ct_fs_12 ct_ff_roboto">
                                        Pesquisar chat
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <ul className="moreoption">
                                    <li className="navbar nav-item dropdown">
                                      <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i
                                          className="fa fa-ellipsis-v"
                                          aria-hidden="true"
                                        />
                                      </a>
                                      <ul className="dropdown-menu">
                                        <li>
                                          <a className="dropdown-item" 
                                          href="#"
                                          >
                                            Delete Chat
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="modal-body">
                              <div className="msg-body">
                                <ul>
                                  <li className="sender">
                                    <img
                                      src="../assets/img/user_profile.png"
                                      alt=""
                                      className="ct_img_30"
                                    />
                                    <div>
                                      <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s,{" "}
                                      </p>
                                      <span className="time">10:06 am</span>
                                    </div>
                                  </li>
                                  <li className="repaly">
                                    <div>
                                      <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s,
                                      </p>
                                      <span className="time">10:20 am</span>
                                    </div>
                                    <img
                                      src="../assets/img/user_profile.png"
                                      alt=""
                                      className="ct_img_30"
                                    />
                                  </li>
                                  <li className="sender">
                                    <img
                                      src="../assets/img/user_profile.png"
                                      alt=""
                                      className="ct_img_30"
                                    />
                                    <div>
                                      <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s,{" "}
                                      </p>
                                      <span className="time">10:06 am</span>
                                    </div>
                                  </li>
                                  <li className="repaly">
                                    <div>
                                      <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s,
                                      </p>
                                      <span className="time">10:20 am</span>
                                    </div>
                                    <img
                                      src="../assets/img/user_profile.png"
                                      alt=""
                                      className="ct_img_30"
                                    />
                                  </li>
                                  <li>
                                    <div className="divider">
                                      <h6>Today</h6>
                                    </div>
                                  </li>
                                  <li className="repaly">
                                    <div>
                                      <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s,
                                      </p>
                                      <span className="time">10:20 am</span>
                                    </div>
                                    <img
                                      src="../assets/img/user_profile.png"
                                      alt=""
                                      className="ct_img_30"
                                    />
                                  </li>
                                  <li className="repaly">
                                    <div>
                                      <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s,
                                      </p>
                                      <span className="time">10:20 am</span>
                                    </div>
                                    <img
                                      src="../assets/img/user_profile.png"
                                      alt=""
                                      className="ct_img_30"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="send-box">
                              <form action="" className="position-relative">
                                <input
                                  type="text"
                                  className="form-control ct_text_indent_15 w-100"
                                  aria-label="message…"
                                  placeholder="Type message"
                                />
                                <div className="d-flex align-items-center ct_send_btn_position">
                                  <div className="send-btns">
                                    <div className="attach">
                                      <div className="button-wrapper">
                                        <span className="label">
                                          <i className="fa-solid fa-link" />
                                        </span>
                                        <input
                                          type="file"
                                          name="upload"
                                          id="upload"
                                          className="upload-box"
                                          placeholder="Upload File"
                                          aria-label="Upload File"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <button type="button">
                                    <i
                                      className="fa fa-paper-plane"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
