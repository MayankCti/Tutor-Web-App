import Cookies from "js-cookie";
import { Formik } from "formik";
import Eye from "../../components/Eye";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { pageRoutes } from "../../routes/pageRoutes";
import { signInSchema } from "../../utils/Schema";
import ErrorMessage from "../../components/ErrorMessage";
import { teacherlogin } from "../../redux/actions/authAction";
import AuthRightContainer from "../../components/other/AuthRightContainer";
import Loader from "../../components/other/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEye, setIsEye] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { isLoading } = useSelector((state) => state.authReducer);
  const initialState = {
    email: Cookies.get("teacherEmail") ?? "",
    password: Cookies.get("teacherPass" ?? ""),
  };

  const handleLogin = async (values, { setSubmitting }) => {
    if (isChecked) {
      Cookies.set("teacherEmail", values?.email, { expires: 365 });
      Cookies.set("teacherPass", values?.password, { expires: 365 });
    }
    navigate(pageRoutes?.dashboard);
    const callback = (response) => {
      if (response.success) navigate(pageRoutes?.dashboard);
    };
    dispatch(teacherlogin({ payload: values, callback }));
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="">
      <div className="container-fluid">
        <div
          className="ct_logo ct_login_logo"
          onClick={() => navigate(pageRoutes.home)}
        >
          <a href="javascript:void(0)">
            <img src="https://i.ibb.co/RYnQRq8/tutor-logo.png" alt="" />
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
                  <form onSubmit={handleSubmit}>
                    <div className="ct_login_form_cnt">
                      <div className="ct_mb_50">
                        <h2 className="ct_fs_36 ct_fw_600 ct_mb_30 ct_ff_roboto mb-4">
                          Log In{" "}
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
                            placeholder="Enter email"
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
                        Log In
                      </button>
                    </div>
                    <div className="mt-4">
                      <p className="mb-0 ct_color_8E8E8E ct_ff_roboto text-center">
                        Don’t have any account?{" "}
                        <a
                          href="javascript:void(0)"
                          className="ct_otange_text ct_fw_700 ms-1"
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
                          onClick={() => navigate(pageRoutes?.studentlogin)}
                          style={{textDecoration: 'none'}}
                          className="ct_purple_text ct_fw_700 ms-3"
                        >
                          Student Log In
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          <AuthRightContainer />
        </div>
      </div>
    </section>
  );
};

export default Login;
