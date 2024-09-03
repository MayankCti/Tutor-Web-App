import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import Cookies from "js-cookie";
import { pageRoutes } from "../../routes/pageRoutes";
import { setAuthStudent } from "../../utils/pip";
import { loginvalidationSchema } from "../../utils/Schema";
import Loader from "../../components/other/Loader";
import axios from "axios";
import { BASE_URL, studentLoginAPI } from "../../routes/endPoints";
import { message } from "antd";

function StudentLogin() {
  const navigate = useNavigate();
  const [isEye, setIsEye] = useState(true);
  const [loader, setLoader] = useState(false);

  const initialValues = {
    email: Cookies.get("user_email") || "",
    password: Cookies.get("user_pass") || "",
    rememberMe: Cookies.get("user_email") ? true : false,
  };

  const handleLogin = (values, { setSubmitting }) => {
    const data = {
      email: values?.email,
      password: values?.password,
    };
    setLoader(true);   
      axios({
        method : 'post',
        url : BASE_URL + studentLoginAPI,      
        data : data,        
      })
      .then((res)=>{
        if(res?.data?.success){
          setAuthStudent(res?.data?.data);  
          console.log("object",res);    
          if (values?.rememberMe) {
            Cookies.set("user_email", values?.email, { expires: 365 });
            Cookies.set("user_pass", values?.password, { expires: 365 });
          } else {
            Cookies.remove("user_email");
            Cookies.remove("user_pass");
          }
          message.success(res?.data?.message)
          navigate(pageRoutes?.studentmyClass)
          setLoader(false)
        } 
      })
      .catch((err)=>{
        console.log("An error occur",err);
          message?.error(err?.response?.data?.message);
        setLoader(false)
      })

  };

  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div
            className="ct_logo ct_login_logo"
            onClick={() => navigate(pageRoutes.home)}
          >
            <a href="javascript:void(0)">
              <img src="../assets/img/logo.svg" alt="" />
            </a>
          </div>

          {loader ? (
            <Loader />
          ) : (
            <div className="row align-items-center">
              <div className="col-lg-7 mb-4 mb-lg-0">
                <div className="ct_login_form">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={loginvalidationSchema}
                    onSubmit={handleLogin}
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
                              Login{" "}
                            </h2>
                          </div>

                          <div className="form-group mb-4">
                            <label className="d-flex align-items-center justify-content-between mb-3 ct_ff_roboto">
                              <span className="ct_fw_700 ct_fs_20">
                                Enter Email
                              </span>
                            </label>
                            <div className="position-relative">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control ct_input ct_ff_roboto"
                                placeholder="Enter Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.email}
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="d-flex align-items-center justify-content-between mb-3 ct_ff_roboto">
                              <span className="ct_fw_700 ct_fs_20">
                                Enter Password
                              </span>
                            </label>
                            <div className="position-relative">
                              <input
                                type={isEye ? "password" : "text"}
                                id="password"
                                name="password"
                                className="form-control ct_input ct_ff_roboto"
                                placeholder="Enter password "
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.password}
                              />
                              <i
                                className={`fa-regular ct_eye_top ${
                                  isEye ? "fa-eye-slash" : "fa-eye"
                                }`}
                                onClick={() => setIsEye(!isEye)}
                              />
                            </div>
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mt-3">
                          <p className="mb-0 ct_color_8E8E8E">
                            <label className="d-flex align-items-center gap-2 ct_ff_roboto">
                              <input
                                type="checkbox"
                                className="ct_custom_checkbox ct_ff_roboto"
                                name="rememberMe"
                                checked={values?.rememberMe}
                                onChange={handleChange}
                              />
                              Remember me?
                            </label>
                          </p>
                          <a
                            href="javascript:void(0)"
                            onClick={() =>
                              navigate(pageRoutes?.studentforgetPassword)
                            }
                            className="ct_color_8E8E8E  ct_forgot_password_link ct_ff_roboto"
                          >
                            Forgot Password ?
                          </a>
                        </div>

                        <div className="mt-5">
                          <button
                            className="ct_purple_btn w-100 justify-content-center ct_line_height_44 ct_ff_roboto ct_extra_dark_btn_bg"
                            type="submit"
                          >
                            LogIn
                          </button>
                        </div>
                        <div className="mt-4">
                          <p className="mb-0 ct_color_8E8E8E ct_ff_roboto text-center ct_decoration_text_line">
                            <a
                              href="javascript:void(0)"
                              onClick={() => navigate(pageRoutes?.login)}
                              className="ct_purple_text ct_fw_700 ms-3"
                            >
                              Teacher Login
                            </a>
                          </p>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className="col-lg-5 mb-4 mb-lg-0 px-lg-0">
                <div className="ct_login_right_img">
                  <img src="../assets/img/login_right_img.png" alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default StudentLogin;
