import React, { useState } from "react";
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import Logout from "../../components/studentComponent/Logout";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import { message } from "antd";
import { pageRoutes } from "../../routes/pageRoutes";
import { editProfileValidationSchema } from "../../utils/Schema";
import axios from "axios";
import { BASE_URL, studentUpdateProfile } from "../../routes/endPoints";
import { getAuthStudent } from "../../utils/pip";


function StudentEditProfile() {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [imagePreview, setImagePreview] = useState("");
  
  const sidebarActive = () => {
    setActive(!active);
  };


  

  const initialValues = {
    file: "" || "assets/img/user_profile.png",
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    emergency_contact_number: "",
    address: "",
    date_of_birth: "",
    grade: "",
    subject: "",
    city : "",
    school_name: "",
    other_notes: "",
    parent_first_name: "",
    parent_last_name: "",
    parent_email: "",
    parent_contact_number: "",
  };
  

  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFieldValue("file", file);
    }
  };

  const handleUpdate = (values) => {
    console.log(values);
    const token = getAuthStudent()
    console.log("token",token);
  axios({
    method :'post',
    url : BASE_URL + studentUpdateProfile,
    data : values,
     headers: {
      Authorization : `Bearer ${token}`
    },
  })
  .then((res)=>{
    if(res?.data?.success){
      console.log("handleupdate",res?.data);
      message.success(res?.data?.data)
      navigate(pageRoutes?.studentprofile)
    }
  })
  .catch((err)=>{
    console.log("An error occured",err);
  })
  };


  return (
    <>
      <main className={active ? "" : "ct_collapsed_sidebar"}>
        <SideBar onToggleSidebar={sidebarActive} />
        <div class="ct_right_content">
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
                              src={imagePreview || "../assets/img/user_profile.png"}
                              alt=""
                              className="ct_img_148"
                            />
                            <label
                              for="ct_edit_profile"
                              style={{ cursor: "pointer" }}
                            >
                              <input
                                type="file"
                                id="file"
                                className="d-none"
                                onChange={(event) =>
                                  handleImageChange(event, setFieldValue)
                                }
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
                                  values={values?.first_name}
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
                                  values={values?.last_name}
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
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="ct_input form-control ct_input_40 ct_input_h_52"
                                  id="email"
                                  name="email" 
                                  values={values?.email}
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
                                  values={values?.contact_number}
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
                                  values={values?.emergency_contact_number}
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
                                  values={values?.address}
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
                                  name="date_of_birth" 
                                  values={values?.date_of_birth}
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
                                  values={values?.city}
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
                                  values={values?.school_name}
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
                                  values={values?.other_notes}
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
                                  values={values?.parent_first_name}
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
                                  values={values?.parent_last_name}
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
                                  Parent Email Address
                                </label>
                                <input
                                  type="email"
                                  className="ct_input form-control ct_input_40 ct_input_h_52"
                                  id="parent_email"
                                  name="parent_email" 
                                  values={values?.parent_email}
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
                                  values={values?.parent_contact_number}
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
                        <button 
                        className="ct_purple_btn px-5"
                        type="submit"
                        >Update</button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Logout/>
    </>
  );
}

export default StudentEditProfile;
