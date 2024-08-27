import { Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { myProfileSchema } from "../../utils/Schema";
import ErrorMessage from "../../components/ErrorMessage";

const EditProfile = () => {
  const navigate = useNavigate();
  const { isToggle } = useSelector((state) => state.authReducer);
  const [changeProfile, setChangeProfile] = useState();
  const [profile, setProfile] = useState("assets/img/user_profile.png");
  const [themeColour, setThemeColour] = useState();
  const initialState = {
    full_name: "",
    email: "",
    stream: "",
    theme_colour_code: "",
  };

  const onHandleChangeImage = (e) => {
    setChangeProfile(e.target.files[0]);
  };

  const handleSubmitProfileData = async (values, { setSubmitting }) => {
    setSubmitting(false);
  };

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
                    <span>Back</span>
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
                    <form>
                      <div className="row">
                        <div className="col-lg-6 mx-auto">
                          <div className="ct_profile_img">
                            <img
                              src={
                                changeProfile
                                  ? URL.createObjectURL(changeProfile)
                                  : profile
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
                            />
                          </div>
                          <div className="form-group text-start mb-4">
                            <label className="ct_ff_roboto mb-2 ct_fw_500 ct_purple_text">
                              Stream
                            </label>
                            <input
                              id="stream"
                              type="text"
                              className="ct_input form-control ct_input_40 ct_input_h_52"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.stream}
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
                                value={themeColour}
                                readOnly
                              />
                              <input
                                type="color"
                                className="ct_color"
                                onChange={(e) => setThemeColour(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button className="ct_purple_btn px-5">Save</button>
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
