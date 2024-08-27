import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import defaultImage from "../assets/userDefault.png"
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import Logout from "../../components/studentComponent/Logout";
import { pageRoutes } from "../../routes/pageRoutes";


function StudentProfile() {

    const navigate = useNavigate();
    const [active,setActive] = useState(false);
    const sidebarActive = () =>{
        setActive(!active);
    };

    const studentProfile = {
        profileImage : "" || "assets/img/user_profile.png",
        firstname : "Corey",
        lastname : "Ebert",
        email : "corey@gmail.com",
        contact : 7895448548,
        emergencycontact : 45848975,
        address : "49 Featherstone Street",
        dob : "15/09/1999",
        grade : "A+",
        service : "1:1 session",
        subject : "Maths",
        school : "Polend school of romania",
        otherNotes : "new school",
        parentFirstname : "Christopher",
        parentLastName : "Nolan",
        parentEmail : "nolan@domainname.com",
        parentcontact : 7685643245,
        parentAddress : "Gunnersbury House, 1 Chapel Hill",
        group : "Group A",
    }

  return (
    <>
      <main className={active ? "" : "ct_collapsed_sidebar"}>
      <SideBar onToggleSidebar={sidebarActive} />
        <div class="ct_right_content">
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
                      onClick={() => navigate(pageRoutes?.studentchangePassword)}
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
                          // src={studentProfile ? studentProfile.profileImage : assets/img/user_profile.png}
                          src="../assets/img/user_profile.png"
                          alt=""
                          className="ct_img_148"
                        />
                        <label htmlFor="ct_edit_profile">
                          <input
                            type="file "
                            id="ct_edit_profile"
                            className="d-none"
                          />
                          <div className="ct_edit_profile_icon">
                            <i className="fa-solid fa-pen" />
                          </div>
                        </label>
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
                              value={studentProfile?.firstname}
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
                              value={studentProfile?.lastname}
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
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              value={studentProfile?.email}
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
                              value={studentProfile?.contact}
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
                              value={studentProfile?.emergencycontact}                              
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
                              value={studentProfile?.address}
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
                              value={studentProfile?.dob}
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
                              value={studentProfile?.grade}
                              defaultValue
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
                              Choose Services
                            </label>
                            <input
                              type="text"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              value={studentProfile?.service}
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
                              Subject
                            </label>
                            <input
                              type="text"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              value={studentProfile?.subject}
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
                              value={studentProfile?.school}
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
                              value={studentProfile?.otherNotes}
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
                              value={studentProfile?.parentFirstname}
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
                              value={studentProfile?.parentLastName}
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
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              value={studentProfile?.parentEmail}
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
                              value={studentProfile?.parentcontact}
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
                              disabled
                              rows={4}
                              value={studentProfile?.parentAddress}
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
                              value={studentProfile?.group}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="text-center">
                    <button className="ct_purple_btn px-5">Save</button>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Logout/>
    </>
  );
}

export default StudentProfile;
