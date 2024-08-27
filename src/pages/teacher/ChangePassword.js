import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../routes/pageRoutes";
import { Formik } from "formik";
import { changePasswordSchema } from "../../utils/Schema";
import ErrorMessage from "../../components/ErrorMessage";
import Eye from "../../components/Eye";

const ChangePassword = () => {
  const navigate = useNavigate();
  const { isToggle } = useSelector((state) => state.authReducer);
  const [eyes, setEyes] = useState({
    eye1: false,
    eye2: false,
    eye3: false,
  });
  const initialState = {
    currPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const handleChangePassword = async (values) => {
    const callback = (response) => {
      if (response.success) {
        navigate(pageRoutes?.dashboard);
      }
    };
    const { confirmPassword, ...rest } = values;
  };
  return (
    <>
      <main className={isToggle ? "ct_collapsed_sidebar" : ""}>
        <Sidebar />
        <div className="ct_right_content">
          <Headers />
          <div class="ct_inner_dashbaord_main">
            <div class="ct_white_bg ct_mt_28 py-4">
              <div class="ct_px_46">
                <div class="d-flex align-items-center justify-content-between gap-2 mb-5 flex-wrap">
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(-1)}
                    class="ct_back_text ct_fs_18"
                  >
                    <i class="fa-solid fa-arrow-left"></i> <span>Back</span>
                  </a>
                  <h4 class="ct_fs_22 ct_ff_roboto ct_fw_600 mx-auto mb-0">
                    Change Password
                  </h4>
                </div>
                <Formik
                  initialValues={initialState}
                  validationSchema={changePasswordSchema}
                  onSubmit={(values, actions) => {
                    handleChangePassword(values, actions);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-lg-6 mx-auto">
                          <div class="form-group  mb-4">
                            <label
                              for=""
                              class="d-flex align-items-center justify-content-between mb-2"
                            >
                              <span class="ct_fw_600 ct_fs_20">
                                Current Password
                              </span>
                            </label>
                            <div class="position-relative">
                              <input
                                type={eyes.eye1 ? "text" : "password"}
                                value={values?.currPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="currPassword"
                                class="form-control ct_input ct_ff_roboto"
                                placeholder="Enter Old Password"
                              />
                              <Eye
                                isEye={eyes.eye1}
                                onClick={() =>
                                  setEyes({ ...eyes, eye1: !eyes.eye1 })
                                }
                              />
                            </div>
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="currPassword"
                            />
                          </div>
                          <div class="form-group  mb-4">
                            <label
                              for=""
                              class="d-flex align-items-center justify-content-between mb-2"
                            >
                              <span class="ct_fw_600 ct_fs_20">
                                New Password
                              </span>
                            </label>
                            <div class="position-relative">
                              <input
                                type={eyes.eye2 ? "text" : "password"}
                                id="newPassword"
                                value={values?.newPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                class="form-control ct_input ct_ff_roboto"
                                placeholder="Enter New Password"
                              />
                              <Eye
                                isEye={eyes.eye2}
                                onClick={() =>
                                  setEyes({ ...eyes, eye2: !eyes.eye2 })
                                }
                              />
                            </div>
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="newPassword"
                            />
                          </div>
                          <div class="form-group">
                            <label
                              for=""
                              class="d-flex align-items-center justify-content-between mb-2"
                            >
                              <span class="ct_fw_600 ct_fs_20">
                                Confirm Password
                              </span>
                            </label>
                            <div class="position-relative">
                              <input
                                type={eyes.eye3 ? "text" : "password"}
                                value={values?.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="confirmPassword"
                                class="form-control ct_input ct_ff_roboto"
                                placeholder="Enter Confirm Password"
                              />
                              <Eye
                                isEye={eyes.eye2}
                                onClick={() =>
                                  setEyes({ ...eyes, eye2: !eyes.eye2 })
                                }
                              />
                            </div>
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="confirmPassword"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="text-center mt-4">
                        <button
                          class="ct_purple_btn px-5"
                          onClick={handleSubmit}
                        >
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
    </>
  );
};

export default ChangePassword;
