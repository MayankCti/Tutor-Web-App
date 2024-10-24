import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import defaultImage from "../assets/userDefault.png"
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import Logout from "../../components/studentComponent/Logout";
import { pageRoutes } from "../../routes/pageRoutes";
import { getAuthStudent, pipViewDate } from "../../utils/pip";
import axios from "axios";
import { BASE_URL, studentProfile } from "../../routes/endPoints";
import Loader from "../../components/other/Loader";

function StudentProfile() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [loader, setLoader] = useState(false);
  const [profile, setProfile] = useState({});
  const sidebarActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const token = getAuthStudent();
    setLoader(true);
    axios({
      method: "get",
      url: BASE_URL + studentProfile,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res?.data?.success) {
          setProfile(res?.data?.data);
          setLoader(false);
        }
      })
      .catch((err) => {
        setLoader(false);
      });
  };

  if (loader) {
    return <Loader />;
  }
  return (
    <>
      <main className={active ? "" : "ct_collapsed_sidebar"}>
        <SideBar onToggleSidebar={sidebarActive} />
        <div className="ct_right_content">
          <Header onToggleSidebar={sidebarActive} />
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
                      onClick={() => navigate(pageRoutes?.studenteditProfile)}
                      className="ct_purple_btn"
                    >
                      Edit Profile
                    </a>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        navigate(pageRoutes?.studentchangePassword)
                      }
                      className="ct_purple_btn"
                    >
                      Change Password
                    </a>
                  </div>
                </div>

                {loader ? (
                  <Loader />
                ) : (
                  <form>
                    <div className="row">
                      <div className="col-lg-6 mx-auto">
                        <div className="ct_profile_img">
                          <img
                            src={
                              profile?.profile_image
                                ? profile.profile_image
                                : "../assets/img/user_profile.png"
                            }
                            // src="../assets/img/user_profile.png"
                            alt=""
                            className="ct_img_148"
                          />
                          {/* <label htmlFor="ct_edit_profile">
                          <input
                            type="file "
                            id="ct_edit_profile"
                            className="d-none"
                          />
                          <div className="ct_edit_profile_icon">
                            <i className="fa-solid fa-pen" />
                          </div>
                        </label> */}
                        </div>
                        <div className="row mt-5">
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                First Name{" "}
                                <span className="ct_required_star">*</span>{" "}
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.first_name}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Last Name{" "}
                                <span className="ct_required_star">*</span>{" "}
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.last_name}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.email}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Contact No.
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.contact_number}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Emergency Contact No.
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.emergency_contact_number}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-12  mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Address
                              </label>
                              <textarea
                                className="ct_input form-control ct_input_40 ct_input_h_52 h-auto"
                                value={profile?.address}
                                disabled
                                rows={4}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                DOB
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={pipViewDate(profile?.date_of_birth)}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Grade
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.grade}
                                defaultValue
                                disabled
                              />
                            </div>
                          </div>

                          {/* <div className="col-md-6 mb-4">
                          <div className="form-group text-start">
                            <label
                              htmlFor=""
                              className="ct_ff_roboto mb-2 ct_fw_500 "
                            >
                              Choose Services
                            </label>
                            <input
                              type="text"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              value={profile?.service}
                              disabled
                            />
                          </div>
                        </div> */}
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Subject
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.subject}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                City
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.city}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-4">
                            <div className="form-group text-star">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                School{" "}
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.school_name}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-12  mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Other Notes
                              </label>
                              <textarea
                                className="ct_input form-control ct_input_40 ct_input_h_52 h-auto"
                                value={profile?.other_notes}
                                disabled
                                rows={4}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Parent First Name{" "}
                                <span className="ct_required_star">*</span>
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.parent_first_name}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Parent Last Name{" "}
                                <span className="ct_required_star">*</span>
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.parent_last_name}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Parent Email
                              </label>
                              <input
                                type="email"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.parent_email}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group text-start">
                              <label
                                htmlFor=""
                                className="ct_ff_roboto mb-2 ct_fw_500 "
                              >
                                Parent Contact No.
                              </label>
                              <input
                                type="text"
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                value={profile?.parent_contact_number}
                                disabled
                              />
                            </div>
                          </div>
                          {/* <div className="col-md-12  mb-4">
                          <div className="form-group text-start">
                            <label
                              htmlFor=""
                              className="ct_ff_roboto mb-2 ct_fw_500 "
                            >
                              Address
                            </label>
                            <textarea
                              className="ct_input form-control ct_input_40 ct_input_h_52 h-auto"
                              disabled
                              rows={4}
                              value={profile?.parentAddress}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="form-group text-start">
                            <label
                              htmlFor=""
                              className="ct_ff_roboto mb-2 ct_fw_500 "
                            >
                              Group
                            </label>
                            <input
                              type="text"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              value={profile?.group}
                              disabled
                            />
                          </div>
                        </div> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className="text-center">
                    <button className="ct_purple_btn px-5">Save</button>
                  </div> */}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Logout />
    </>
  );
}

export default StudentProfile;
