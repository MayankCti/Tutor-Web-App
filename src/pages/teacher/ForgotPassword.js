import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import Loader from "../../components/other/Loader";
import { pageRoutes } from "../../routes/pageRoutes";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage";
import { ForgotPasswordSchema } from "../../utils/Schema";
import { teacherForgotPassword } from "../../redux/actions/authAction";
import AuthRightContainer from "../../components/other/AuthRightContainer";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.authReducer);
  const initialState = {
    email: "",
  };

  const handleForgotPassword = async (values, { setSubmitting }) => {
    const callback = (response) => {
      if (response.success) navigate(pageRoutes?.login);
    };
    dispatch(teacherForgotPassword({ payload: values, callback }));
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section>
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
                validationSchema={ForgotPasswordSchema}
                onSubmit={(values, actions) => {
                  handleForgotPassword(values, actions);
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
                          Forgot Password{" "}
                        </h2>
                      </div>
                      <div className="form-group mb-4">
                        <label className="d-flex align-items-center justify-content-between mb-3 ct_ff_roboto">
                          <span className="ct_fw_700 ct_fs_20">Email </span>
                        </label>
                        <div className="position-relative">
                          <input
                            id="email"
                            type="email"
                            className="form-control ct_input ct_ff_roboto"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Enter Email"
                          />
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <button
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                        className="ct_purple_btn w-100 justify-content-center ct_line_height_44 ct_ff_roboto ct_extra_dark_btn_bg"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="mt-4">
                      <p className="mb-0 ct_color_8E8E8E ct_ff_roboto text-center">
                        Already have an account?{" "}
                        <a
                          href="javascript:void(0)"
                          onClick={() => navigate(pageRoutes.login)}
                          className="ct_purple_text ct_fw_700 ms-3"
                        >
                          Login
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

export default ForgotPassword;
