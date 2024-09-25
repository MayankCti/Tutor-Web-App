import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import { forgetPasswordValidationSchema } from "../../utils/Schema";
import { pageRoutes } from "../../routes/pageRoutes";
import { message } from "antd";
import axios from "axios";
import { BASE_URL, studentForgotPassword } from "../../routes/endPoints";
import Loader from "../../components/other/Loader";

function StudentForgetPassword() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const initialValues = {
    email: "",
  };

  const handleForgetPassword = (values) => {
    setLoader(true);
    axios({
      method: "post",
      url: BASE_URL + studentForgotPassword,
      data: values,
    })
      .then((res) => {
        if (res?.data?.success) {
          message.success(res?.data?.message);
          navigate(pageRoutes?.studentlogin);
          setLoader(false);
        }
      })
      .catch((err) => {
        message.error(err?.response?.data?.message);
        setLoader(false);
      });
  };

  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="ct_logo ct_login_logo">
            <a href="index.html">
              <img src="assets/img/logo.svg" alt="" />
            </a>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0">
              {loader ? (
                <Loader />
              ) : (
                <div className="ct_login_form">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={forgetPasswordValidationSchema}
                    onSubmit={handleForgetPassword}
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
                        <div className="ct_login_form_cnt">
                          <div className="ct_mb_50">
                            <h2 className="ct_fs_36 ct_fw_600 ct_mb_30 ct_ff_roboto mb-4">
                              Forgot Password{" "}
                            </h2>
                          </div>

                          <div className="form-group mb-4">
                            <label
                              for=""
                              className="d-flex align-items-center justify-content-between mb-3 ct_ff_roboto"
                            >
                              <span className="ct_fw_700 ct_fs_20">Email</span>
                            </label>
                            <div className="position-relative">
                              <input
                                type="email"
                                className="form-control ct_input ct_ff_roboto"
                                placeholder="Enter Email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>

                        <div className="mt-5">
                          <button
                            className="ct_purple_btn w-100 justify-content-center ct_line_height_44 ct_ff_roboto ct_extra_dark_btn_bg"
                            type="submit"
                          >
                            Continue
                          </button>
                        </div>
                        <div className="mt-4">
                          <p className="mb-0 ct_color_8E8E8E ct_ff_roboto text-center">
                          Already know your password?
                            <a
                              href="javascript:void(0)"
                              onClick={() => navigate(pageRoutes?.studentlogin)}
                              className="ct_purple_text ct_fw_700 ms-1"
                            >
                              Login
                            </a>
                          </p>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              )}
            </div>
            <div className="col-lg-5 mb-4 mb-lg-0 px-lg-0">
              <div className="ct_login_right_img">
                <img src="../assets/img/login_right_img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StudentForgetPassword;
