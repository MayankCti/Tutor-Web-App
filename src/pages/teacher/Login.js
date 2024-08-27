import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import { signInSchema } from "../../utils/Schema";
import Cookies from "js-cookie";
import { Formik } from "formik";
import Eye from "../../components/Eye";
import { pageRoutes } from "../../routes/pageRoutes";
import { useNavigate } from "react-router";
import AuthRightContainer from "../../components/other/AuthRightContainer";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [isEye, setIsEye] = useState(false);
  const initialState = {
    email: Cookies.get("user_id") ?? "",
    password: Cookies.get("user_pass" ?? ""),
  };

  const handleLogin = async (values, { setSubmitting }) => {
    setSubmitting(false);
    if (isChecked) {
      Cookies.set("user_id", values?.email, { expires: 365 });
      Cookies.set("user_pass", values?.password, { expires: 365 });
    }
    navigate(pageRoutes?.dashboard);
    // const callback = (response) => {
    //     if (response.success) navigate(pageRoutes?.dashboard);
    // };
    // dispatch(adminLogin({ payload: values, callback }));
  };

  return (
    <section className="">
      <div className="container-fluid">
        <div
          className="ct_logo ct_login_logo"
          onClick={() => navigate(pageRoutes.home)}
        >
          <a href="javascript:void(0)">
            <img src="assets/img/logo.svg" alt="" />
          </a>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <div className="ct_login_form">
              <Formik
                initialValues={initialState}
                validationSchema={signInSchema}
                onSubmit={(values, actions) => {
                  handleLogin(values, actions);
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
                  <form>
                    <div className="ct_login_form_cnt">
                      <div className="ct_mb_50">
                        <h2 className="ct_fs_36 ct_fw_600 ct_mb_30 ct_ff_roboto mb-4">
                          Login{" "}
                        </h2>
                      </div>
                      <div className="form-group mb-4">
                        <label className="d-flex align-items-center justify-content-between mb-3 ct_ff_roboto">
                          <span className="ct_fw_700 ct_fs_20">Email</span>
                        </label>
                        <div className="position-relative">
                          <input
                            id="email"
                            type="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className="form-control ct_input ct_ff_roboto"
                            placeholder="Enter Email"
                          />
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName="email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="d-flex align-items-center justify-content-between mb-3 ct_ff_roboto">
                          <span className="ct_fw_700 ct_fs_20">Password</span>
                        </label>
                        <div className="position-relative">
                          <input
                            id="password"
                            type={isEye ? "text" : "password"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className="form-control ct_input ct_ff_roboto"
                            placeholder="Enter password"
                          />
                          <Eye isEye={isEye} onClick={() => setIsEye(!isEye)} />
                        </div>
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName="password"
                          />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mt-3">
                      <p className="mb-0 ct_color_8E8E8E">
                        <label className="d-flex align-items-center gap-2 ct_ff_roboto">
                          <input
                            onChange={() => setIsChecked(!isChecked)}
                            type="checkbox"
                            className="ct_custom_checkbox ct_ff_roboto"
                            checked={isChecked}
                          />
                          Remember me
                        </label>
                      </p>
                      <a
                        href="javascript:void(0)"
                        onClick={() => navigate(pageRoutes.forgotPassword)}
                        className="ct_color_8E8E8E  ct_forgotPassword_link ct_ff_roboto"
                      >
                        Forgot Password ?
                      </a>
                    </div>
                    <div className="mt-5">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="ct_purple_btn w-100 justify-content-center ct_line_height_44 ct_ff_roboto ct_extra_dark_btn_bg"
                      >
                        LogIn
                      </button>
                    </div>
                    <div className="mt-4">
                      <p className="mb-0 ct_color_8E8E8E ct_ff_roboto text-center">
                        Don’t have any account?{" "}
                        <a
                          href="javascript:void(0)"
                          className="ct_purple_text ct_fw_700 ms-3"
                          onClick={() => navigate(pageRoutes.sign_up)}
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="mb-0 ct_color_8E8E8E ct_ff_roboto text-center ct_decoration_text_line">
                        <a
                          href="javascript:void(0)"
                          className="ct_purple_text ct_fw_700 ms-3"
                        >
                          Student Login
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          <AuthRightContainer/>
        </div>
      </div>
    </section>
  );
};

export default Login;
