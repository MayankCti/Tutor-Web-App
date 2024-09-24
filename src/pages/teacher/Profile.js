import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../routes/pageRoutes";
import { fetchProfile } from "../../redux/actions/authAction";
import Loader from "../../components/other/Loader";
import { curSym } from "../../utils/pip";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isToggle, isLoading } = useSelector((state) => state.authReducer);
  const { profile } = useSelector((state) => state?.authReducer);
  console.log({ object: profile });
  const {
    full_name,
    email,
    stream_name,
    theme_color,
    profile_image,
    per_hour_pricing,
    username,
    max_student_headcount
  } = profile ?? {};
  console.log({ profile });
  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  if (isLoading) {
    return <Loader />;
  }
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
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.changePassword)}
                      className="ct_purple_btn"
                    >
                      Change Password
                    </a>
                  </div>
                </div>

                <form>
                  <div className="row">
                    <div className="col-lg-6 mx-auto">
                      <div className="ct_profile_img">
                        <img
                          src={profile_image ?? "../assets/img/user_profile.png"}
                          alt=""
                          className="ct_img_148"
                        />
                      </div>
                      <div className="form-group text-start mb-4">
                        <label
                          for=""
                          className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                        >
                          Username{" "}
                        </label>
                        <input
                          type="text"
                          className="ct_input form-control ct_input_40 ct_input_h_52"
                          value={username ?? ""}
                          disabled
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
                          value={full_name ?? ""}
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
                          value={email}
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
                          value={stream_name ?? ""}
                          disabled
                        />
                      </div>
                      <div className="form-group text-start mb-4">
                        <label
                          for=""
                          className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                        >
                          Per Hour Price{" "}
                        </label>
                        <input
                          type="text"
                          className="ct_input form-control ct_input_40 ct_input_h_52"
                          value={`${curSym} ${per_hour_pricing}` ?? "0"}
                          disabled
                        />
                      </div>
                      <div className="form-group text-start mb-4">
                        <label
                          for=""
                          className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                        >
                          Max Students Headcount{" "}
                        </label>
                        <input
                          type="text"
                          className="ct_input form-control ct_input_40 ct_input_h_52"
                          value={`${max_student_headcount}` ?? "0"}
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
                            value={theme_color}
                            className="ct_input ct_color_input form-control ct_input_h_52"
                            disabled
                          />
                          <input
                            type="color"
                            className="ct_color"
                            value={theme_color}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
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
