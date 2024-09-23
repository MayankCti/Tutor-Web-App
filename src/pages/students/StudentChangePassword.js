import React, { useState } from "react";
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import Logout from "../../components/studentComponent/Logout";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import { message } from "antd";
import { pageRoutes } from "../../routes/pageRoutes";
import { changePasswordValidationSchema } from "../../utils/Schema";

function StudentChangePassword() {
  const navigate = useNavigate();
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const initialValues = {
    old_password: "",
    new_password: "",
    confirm_password: "",
  };

  const [active, setActive] = useState(true);
  const sidebarActive = () => {
    setActive(!active);
  };

  const passwordChanged = (values) => {
    console.log(values);
    message.success("password has been updated");
    navigate(pageRoutes?.studentprofile);
  };

  return (
    <>
      <main className={active ? "" : "ct_collapsed_sidebar"}>
        <SideBar onToggleSidebar={sidebarActive} />
        <div className="ct_right_content">
          <Header onToggleSidebar={sidebarActive} />
          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg ct_mt_28 py-4">
              <div className="ct_px_46">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-5 flex-wrap">
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(-1)}
                    className="ct_back_text ct_fs_18"
                  >
                    <i className="fa-solid fa-arrow-left"></i> <span>Back</span>
                  </a>
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600 mx-auto mb-0">
                    Change Password
                  </h4>
                </div>

                <Formik
                  initialValues={initialValues}
                  validationSchema={changePasswordValidationSchema}
                  onSubmit={(values) => {
                    passwordChanged(values);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-6 mx-auto">
                          <div className="form-group  mb-4">
                            <label
                              for=""
                              className="d-flex align-items-center justify-content-between mb-2"
                            >
                              <span className="ct_fw_600 ct_fs_20">
                                Current Password
                              </span>
                            </label>
                            <div className="position-relative">
                              <input
                                type={
                                  isOldPasswordVisible ? "text" : "password"
                                }
                                className="form-control ct_input ct_ff_roboto"
                                placeholder="Enter Old Password"
                                id="old_password"
                                name="old_password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <i
                                className={`fa-regular ct_eye_top ${
                                  isOldPasswordVisible
                                    ? "fa-eye"
                                    : "fa-eye-slash"
                                }`}
                                onClick={() =>
                                  setIsOldPasswordVisible(!isOldPasswordVisible)
                                }
                              ></i>
                            </div>
                            <ErrorMessage
                              name="old_password"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                          <div className="form-group  mb-4">
                            <label
                              for=""
                              className="d-flex align-items-center justify-content-between mb-2"
                            >
                              <span className="ct_fw_600 ct_fs_20">
                                New Password
                              </span>
                            </label>
                            <div className="position-relative">
                              <input
                                type={
                                  isNewPasswordVisible ? "text" : "password"
                                }
                                className="form-control ct_input ct_ff_roboto"
                                placeholder="Enter New Password"
                                id="new_password"
                                name="new_password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <i
                                className={`fa-regular ct_eye_top ${
                                  isNewPasswordVisible
                                    ? "fa-eye"
                                    : "fa-eye-slash"
                                }`}
                                onClick={() =>
                                  setIsNewPasswordVisible(!isNewPasswordVisible)
                                }
                              ></i>
                            </div>
                            <ErrorMessage
                              name="new_password"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              for=""
                              className="d-flex align-items-center justify-content-between mb-2"
                            >
                              <span className="ct_fw_600 ct_fs_20">
                                Confirm Password
                              </span>
                            </label>
                            <div className="position-relative">
                              <input
                                type={
                                  isConfirmPasswordVisible ? "text" : "password"
                                }
                                className="form-control ct_input ct_ff_roboto"
                                placeholder="Enter Confirm Password"
                                id="confirm_password"
                                name="confirm_password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <i
                                className={`fa-regular ct_eye_top ${
                                  isConfirmPasswordVisible
                                    ? "fa-eye"
                                    : "fa-eye-slash"
                                }`}
                                onClick={() =>
                                  setIsConfirmPasswordVisible(
                                    !isConfirmPasswordVisible
                                  )
                                }
                              ></i>
                            </div>
                            <ErrorMessage
                              name="confirm_password"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <button className="ct_purple_btn px-5" type="submit">
                          Save
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Logout />
    </>
  );
}

export default StudentChangePassword;
