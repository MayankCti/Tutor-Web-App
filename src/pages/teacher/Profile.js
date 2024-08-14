import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../routes/pageRoutes";

const Profile = () => {
  const navigate = useNavigate();
  const { isToggle } = useSelector((state) => state.authReducer);

  return (
    <>
      <main className={isToggle ? "ct_collapsed_sidebar" : ""}>
        <Sidebar />
        <div className="ct_right_content">
          <Headers />
          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg ct_mt_28">
              <div className="ct_px_46">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-5 flex-wrap">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">
                    My Profile
                  </h4>
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.editProfile)}
                      className="ct_purple_btn"
                    >
                      Edit Profile
                    </a>
                    <a href="javascript:void(0)" className="ct_purple_btn">
                      Change Password
                    </a>
                  </div>
                </div>

                <form>
                  <div className="row">
                    <div className="col-lg-6 mx-auto">
                      <div className="ct_profile_img">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_148"
                        />
                      </div>

                      <div className="form-group text-start mb-4">
                        <label
                          for=""
                          className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                        >
                          Full Name{" "}
                        </label>
                        <input
                          type="text"
                          className="ct_input form-control ct_input_40 ct_input_h_52"
                          value="Alex meian"
                          disabled
                        />
                      </div>
                      <div className="form-group text-start mb-4">
                        <label
                          for=""
                          className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="ct_input form-control ct_input_40 ct_input_h_52"
                          value="alex214578@domain.com"
                          disabled
                        />
                      </div>
                      <div className="form-group text-start mb-4">
                        <label
                          for=""
                          className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                        >
                          Stream
                        </label>
                        <input
                          type="text"
                          className="ct_input form-control ct_input_40 ct_input_h_52"
                          value="Math"
                          disabled
                        />
                      </div>
                      <div className="form-group text-start mb-4">
                        <label
                          for=""
                          className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                        >
                          Theme color code
                        </label>
                        <div className="position-relative">
                          <input
                            type="text"
                            className="ct_input ct_color_input form-control ct_input_h_52"
                            disabled
                          />
                          <input type="color" className="ct_color" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="ct_purple_btn px-5">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
