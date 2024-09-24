import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import Loader from "../../components/other/Loader";
import { myProfileSchema } from "../../utils/Schema";
import { pageRoutes } from "../../routes/pageRoutes";
import { useDispatch, useSelector } from "react-redux";
import { pipGetTeacherProfile } from "../../utils/pip";
import ErrorMessage from "../../components/ErrorMessage";
import { updateProfile } from "../../redux/actions/authAction";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isToggle, isLoading } = useSelector((state) => state.authReducer);
  const [changeProfile, setChangeProfile] = useState();
  const {
    profile_image,
    full_name,
    email,
    stream_name,
    theme_color,
    per_hour_pricing,
    username,
    max_student_headcount,
  } = pipGetTeacherProfile() ?? {};

  const initialState = {
    full_name: full_name ?? "",
    email: email ?? "",
    stream: stream_name ?? "",
    theme: theme_color ?? "",
    per_hour_pricing: per_hour_pricing ?? "",
    username: username ?? "",
    max_student_headcount: max_student_headcount ?? "",
  };

  const onHandleChangeImage = (e) => {
    setChangeProfile(e.target.files[0]);
  };

  const handleSubmitProfileData = async (values, { setSubmitting }) => {
    const callback = (response) => {
      if (response.success) navigate(pageRoutes?.profile);
    };
    const data = new FormData();
    data.append("full_name", values?.full_name);
    data.append("stream", values?.stream);
    data.append("theme", values?.theme);
    data.append("per_hour_pricing", values?.per_hour_pricing);
    data.append("username", values?.username);
    data.append("max_student_headcount", values?.max_student_headcount);
    {
      changeProfile && data.append("file", changeProfile);
    }

    dispatch(updateProfile({ payload: data, callback }));
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
            <div className="ct_white_bg ct_mt_28">
              <div className="ct_px_46">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-5 flex-wrap">
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(-1)}
                    className="ct_back_text ct_fs_18"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                    <span>&nbsp;Back</span>
                  </a>
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600 mx-auto mb-0">
                    Edit Profile
                  </h4>
                </div>
                <Formik
                  initialValues={initialState}
                  validationSchema={myProfileSchema}
                  onSubmit={(values, actions) => {
                    handleSubmitProfileData(values, actions);
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
                          <div className="ct_profile_img">
                            <img
                              src={
                                changeProfile
                                  ? URL.createObjectURL(changeProfile)
                                  : profile_image ??
                                    "assets/img/user_profile.png"
                              }
                              className="ct_img_148"
                            />
                            <label for="ct_edit_profile">
                              <input
                                type="file"
                                id="ct_edit_profile"
                                className="d-none"
                                onChange={onHandleChangeImage}
                              />
                              <div className="ct_edit_profile_icon">
                                <i className="fa-solid fa-pen"></i>
                              </div>
                            </label>
                          </div>
                          <div className="form-group text-start mb-4">
                            <label className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text">
                              Username{" "}
                            </label>

                            <input
                              id="username"
                              type="text"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.username}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="username"
                            />
                          </div>
                          <div className="form-group text-start mb-4">
                            <label className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text">
                              Full Name{" "}
                            </label>

                            <input
                              id="full_name"
                              type="text"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.full_name}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="full_name"
                            />
                          </div>
                          <div className="form-group text-start mb-4">
                            <label className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text">
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              disabled
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="email"
                            />
                          </div>
                          <div className="form-group text-start mb-4">
                            <label className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text">
                              stream
                            </label>
                            <input
                              type="text"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              id="stream"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.stream}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="stream"
                            />
                          </div>
                          <div className="form-group text-start mb-4">
                            <label className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text">
                              Per Hour Price
                            </label>
                            <input
                              type="text"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              id="per_hour_pricing"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.per_hour_pricing}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="per_hour_pricing"
                            />
                          </div>
                          <div className="form-group text-start mb-4">
                            <label
                              for=""
                              className="ct_ff_roboto mb-2 ct_fw_500"
                            >
                              Max Students Headcount
                            </label>
                            <input
                              type="text"
                              className="ct_input form-control ct_input_40"
                              id="max_student_headcount"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.max_student_headcount}
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="max_student_headcount"
                            />
                          </div>
                          <div className="form-group text-start mb-4">
                            <label
                              for=""
                              className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text"
                            >
                              Theme colour code
                            </label>
                            <div className="position-relative">
                              <input
                                type="text"
                                className="ct_input ct_color_input form-control ct_input_h_52"
                                value={values.theme}
                                readOnly
                              />
                              <input
                                type="color"
                                className="ct_color"
                                id="theme"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.theme}
                              />
                              <ErrorMessage
                                errors={errors}
                                touched={touched}
                                fieldName="theme"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
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

export default EditProfile;
