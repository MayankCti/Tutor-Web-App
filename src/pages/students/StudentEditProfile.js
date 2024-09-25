import React, { useEffect, useState } from "react";
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import Logout from "../../components/studentComponent/Logout";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import { message } from "antd";
import { pageRoutes } from "../../routes/pageRoutes";
import { editProfileValidationSchema } from "../../utils/Schema";
import axios from "axios";
import {
  BASE_URL,
  studentProfile,
  studentUpdateProfile,
} from "../../routes/endPoints";
import { getAuthStudent } from "../../utils/pip";
import Loader from "../../components/other/Loader";
import moment from "moment";

function StudentEditProfile() {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [imagePreview, setImagePreview] = useState();
  const [dateView, setDateView] = useState();
  const [loader, setLoader] = useState(false);
  const [profile, setProfile] = useState({});


  const sidebarActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const token = getAuthStudent();
    setLoader(true);
    axios({
      method: "get",
      url: BASE_URL + studentProfile,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res?.data?.success) {
          setProfile(res?.data?.data);
          setLoader(false);
          setImagePreview(res?.data?.data?.profile_image)
          setDateView(moment(res?.data?.data?.date_of_birth).format("YYYY-MM-DD"))
        }
      })
      .catch((err) => {
        setLoader(false);
      });
  };

  const initialValues = {
    file: profile?.profile_image || "",
    first_name: profile?.first_name || "",
    last_name: profile?.last_name || "",
    email: profile?.email || "",
    contact_number: profile?.contact_number || "",
    emergency_contact_number: profile?.emergency_contact_number || "",
    address: profile?.address || "",
    date_of_birth: dateView || "",
    grade: profile?.grade || "",
    subject: profile?.subject || "",
    city: profile?.city || "",
    school_name: profile?.school_name || "",
    other_notes: profile?.other_notes || "",
    parent_first_name: profile?.parent_first_name || "",
    parent_last_name: profile?.parent_last_name || "",
    parent_email: profile?.parent_email || "",
    parent_contact_number: profile?.parent_contact_number || "",
  };
  

  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFieldValue("file", file); 
    }
    
  };

  const handleUpdate = (values) => {
    const formdata = new FormData();
    formdata.append("first_name", values?.first_name);
    formdata.append("last_name", values?.last_name);
    formdata.append("contact_number", values?.contact_number);
    formdata.append(
      "emergency_contact_number",
      values?.emergency_contact_number
    );
    formdata.append("address", values?.address);
    formdata.append("city", values?.city);
    formdata.append("date_of_birth", values?.date_of_birth);
    formdata.append("grade", values?.grade);
    formdata.append("subject", values?.subject);
    formdata.append("school_name", values?.school_name);
    formdata.append("other_notes", values?.other_notes);
    formdata.append("parent_first_name", values?.parent_first_name);
    formdata.append("parent_last_name", values?.parent_last_name);
    formdata.append("parent_email", values?.parent_email);
    formdata.append("parent_contact_number", values?.parent_contact_number);
    if (values?.file) {
      // formdata.append("file", values?.file);
      formdata.append("file", new Blob([values?.file]));

    }

    const token = getAuthStudent();
    axios({
      method: "post",
      url: BASE_URL + studentUpdateProfile,
      data: formdata,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res?.data?.success) {
          message.success(res?.data?.message);
          navigate(pageRoutes?.studentProfile);
        }
      })
      .catch((err) => {
        message.error(err?.response?.data?.message);

      });
  };

  return (
    <>
      <main className={active ? "" : "ct_collapsed_sidebar"}>
        <SideBar onToggleSidebar={sidebarActive} />
        <div className="ct_right_content">
          <Header onToggleSidebar={sidebarActive} />
          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg ct_mt_28">
              <div className="ct_px_46">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-5 flex-wrap">
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(-1)}
                    className="ct_back_text ct_fs_18"
                  >
                    <i className="fa-solid fa-arrow-left" /> <span>Back</span>
                  </a>
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600 mx-auto mb-0">
                    Edit Profile
                  </h4>
                </div>

                {loader ? (
                  <Loader />
                ) : (
                  <Formik
                    initialValues={initialValues}
                    validationSchema={editProfileValidationSchema}
                    onSubmit={handleUpdate}
                  >
                    {({
                      values,
                      touched,
                      errors,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      setFieldValue,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg-6 mx-auto">
                            <div className="ct_profile_img mb-4">
                              <img
                                src={
                                  imagePreview ||
                                  "../assets/img/user_profile.png"
                                }
                                alt=""
                                className="ct_img_148"
                              />
                              <label for="file" style={{ cursor: "pointer" }}>
                                <input
                                  type="file"
                                  id="file"
                                  name="file"
                                  className="d-none"
                                  onChange={(event) =>
                                    handleImageChange(event, setFieldValue)
                                  }     
                                  // onChange={(event) => {
                                  //   const file = event.target.files[0];
                                  //   if (file) {
                                  //     setImagePreview(URL.createObjectURL(file));
                                  //     setFieldValue("profile_images", file);
                                  //   }
                                  // }}                            
                                />
                                <div className="ct_edit_profile_icon">
                                  <i className="fa-solid fa-pen"></i>
                                </div>
                              </label>
                            </div>
                            <div className="row mt-5">
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    First Name{" "}
                                    <span className="ct_required_star">*</span>{" "}
                                  </label>
                                  <input
                                    type="text"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="first_name"
                                    name="first_name"
                                    value={values?.first_name}
                                    placeholder="Enter first name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="first_name"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Last Name{" "}
                                    <span className="ct_required_star">*</span>{" "}
                                  </label>
                                  <input
                                    type="text"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="last_name"
                                    name="last_name"
                                    value={values?.last_name}
                                    placeholder="Enter last name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="last_name"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Email 
                                  </label>
                                  <input
                                    type="email"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="email"
                                    name="email"
                                    value={values?.email}
                                    placeholder="Enter email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Contact No.
                                  </label>
                                  <input
                                    type="text"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="contact_number"
                                    name="contact_number"
                                    value={values?.contact_number}
                                    placeholder="Enter contact "
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="contact_number"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Emergency Contact No.
                                  </label>
                                  <input
                                    type="text"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="emergency_contact_number"
                                    name="emergency_contact_number"
                                    value={values?.emergency_contact_number}
                                    placeholder="Enter emergency contact"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="emergency_contact_number"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12  mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Address
                                  </label>
                                  <textarea
                                    className="ct_input form-control ct_input_40 ct_input_h_52 h-auto"
                                    id="address"
                                    name="address"
                                    value={values?.address}
                                    placeholder="Enter address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="address"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    DOB
                                  </label>
                                  <input
                                    type="date"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="date_of_birth"
                                    value={values?.date_of_birth} 
                                    placeholder="Enter DOB"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="date_of_birth"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Grade
                                  </label>
                                  <select
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="grade"
                                    name="grade"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values?.grade}
                                  >
                                    <option value="" label="Select grade" />
                                    <option value="A+" label="A+" />
                                    <option value="A" label="A" />
                                    <option value="B+" label="B+" />
                                    <option value="B" label="B" />
                                    <option value="C+" label="C+" />
                                    <option value="C" label="C" />
                                    <option value="D+" label="D+" />
                                    <option value="D" label="D" />
                                    <option value="E" label="E" />
                                    <option value="F" label="F" />
                                  </select>
                                  <ErrorMessage
                                    name="grade"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Subject
                                  </label>
                                  <select
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="subject"
                                    name="subject"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values?.subject}
                                  >
                                    <option value="">Select subject</option>
                                    <option value="Science">Science</option>
                                    <option value="Maths">Maths</option>
                                    <option value="Physics">Physics</option>
                                    <option value="Chemestry">Chemestry</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="English">English</option>
                                  </select>
                                  <ErrorMessage
                                    name="subject"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    City{" "}
                                    <span className="ct_required_star">*</span>{" "}
                                  </label>
                                  <input
                                    type="text"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="city"
                                    name="city"
                                    value={values?.city}
                                    placeholder="Enter City "
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12 mb-4">
                                <div className="form-group text-star">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    School{" "}
                                  </label>
                                  <input
                                    type="text"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="school_name"
                                    name="school_name"
                                    value={values?.school_name}
                                    placeholder="Enter school"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="school_name"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12  mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Other Notes
                                  </label>
                                  <textarea
                                    className="ct_input form-control ct_input_40 ct_input_h_52 h-auto"
                                    rows={4}
                                    id="other_notes"
                                    name="other_notes"
                                    value={values?.other_notes}
                                    placeholder="Type here...."
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="other_notes"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Parent First Name{" "}
                                    <span className="ct_required_star">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="parent_first_name"
                                    name="parent_first_name"
                                    value={values?.parent_first_name}
                                    placeholder="Enter parent first name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="parent_first_name"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Parent Last Name{" "}
                                    <span className="ct_required_star">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="parent_last_name"
                                    name="parent_last_name"
                                    value={values?.parent_last_name}
                                    placeholder="Enter parent last name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="parent_last_name"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Parent Email 
                                  </label>
                                  <input
                                    type="email"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="parent_email"
                                    name="parent_email"
                                    value={values?.parent_email}
                                    placeholder="Enter parent email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="parent_email"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-group text-start">
                                  <label
                                    htmlFor=""
                                    className="ct_ff_roboto mb-2 ct_fw_500 "
                                  >
                                    Parent Contact No.
                                  </label>
                                  <input
                                    type="text"
                                    className="ct_input form-control ct_input_40 ct_input_h_52"
                                    id="parent_contact_number"
                                    name="parent_contact_number"
                                    value={values?.parent_contact_number}
                                    placeholder="Enter parent contact no."
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="parent_contact_number"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <button className="ct_purple_btn px-5" type="submit">
                            Update
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Logout />
    </>
  );
}

export default StudentEditProfile;