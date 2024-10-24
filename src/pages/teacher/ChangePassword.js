import { Formik } from "formik";
import Eye from "../../components/Eye";
import React, { useState } from "react";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/other/Loader";
import { pageRoutes } from "../../routes/pageRoutes";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage";
import { changePasswordSchema } from "../../utils/Schema";
import { teacherChangePassword } from "../../redux/actions/authAction";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isToggle, isLoading } = useSelector((state) => state.authReducer);
  const [eyes, setEyes] = useState({
    eye1: false,
    eye2: false,
    eye3: false,
  });
  const initialState = {
    currentPassword: "",
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
    dispatch(teacherChangePassword({ payload: rest, callback }));
  };

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
                                type={eyes.eye1 ? "text" : "password"}
                                value={values?.currentPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="currentPassword"
                                className="form-control ct_input ct_ff_roboto"
                                placeholder="Enter Current Password"
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
                              fieldName="currentPassword"
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
                                type={eyes.eye2 ? "text" : "password"}
                                id="newPassword"
                                value={values?.newPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-control ct_input ct_ff_roboto"
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
                                type={eyes.eye3 ? "text" : "password"}
                                value={values?.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="confirmPassword"
                                className="form-control ct_input ct_ff_roboto"
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
                      <div className="text-center mt-4">
                        <button
                          className="ct_purple_btn px-5"
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
