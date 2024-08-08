import React from "react";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../routes/pageRoutes";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="ct_inner_dashbaord_main">
        <div class="ct_white_bg ct_mt_28">
          <div class="ct_px_46">
            <div class="d-flex align-items-center justify-content-between gap-2 mb-5 flex-wrap">
              <h4 class="ct_fs_22 ct_ff_roboto ct_fw_600">My Profile</h4>
              <div class="d-flex align-items-center gap-3 flex-wrap">
                <a
                  href="javascript:void(0)"
                  onClick={() => navigate(pageRoutes?.editProfile)}
                  class="ct_purple_btn"
                >
                  Edit Profile
                </a>
                <a href="change-password.html" class="ct_purple_btn">
                  Change Password
                </a>
              </div>
            </div>

            <form>
              <div class="row">
                <div class="col-lg-6 mx-auto">
                  <div class="ct_profile_img">
                    <img
                      src="assets/img/profile_img2.png"
                      alt=""
                      class="ct_img_148"
                    />
                  </div>

                  <div class="form-group text-start mb-4">
                    <label
                      for=""
                      class="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                    >
                      Full Name{" "}
                    </label>
                    <input
                      type="text"
                      class="ct_input form-control ct_input_40 ct_input_h_52"
                      value="Alex meian"
                      disabled
                    />
                  </div>
                  <div class="form-group text-start mb-4">
                    <label
                      for=""
                      class="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="ct_input form-control ct_input_40 ct_input_h_52"
                      value="alex214578@domain.com"
                      disabled
                    />
                  </div>
                  <div class="form-group text-start mb-4">
                    <label
                      for=""
                      class="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                    >
                      Stream
                    </label>
                    <input
                      type="text"
                      class="ct_input form-control ct_input_40 ct_input_h_52"
                      value="Math"
                      disabled
                    />
                  </div>
                  <div class="form-group text-start mb-4">
                    <label
                      for=""
                      class="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                    >
                      Theme color code
                    </label>
                    <div class="position-relative">
                      <input
                        type="text"
                        class="ct_input ct_color_input form-control ct_input_h_52"
                        disabled
                      />
                      <input type="color" class="ct_color" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button class="ct_purple_btn px-5">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
