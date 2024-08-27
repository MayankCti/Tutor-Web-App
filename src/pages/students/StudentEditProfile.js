import React, { useState } from "react";
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import Logout from "../../components/studentComponent/Logout";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import { message } from "antd";
import { pageRoutes } from "../../routes/pageRoutes";
import { editProfileValidationSchema } from "../../utils/Schema";


function StudentEditProfile() {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [imagePreview, setImagePreview] = useState("");
  
  const sidebarActive = () => {
    setActive(!active);
  };

  const initialValues = {
    profile_images: "" || "assets/img/user_profile.png",
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    emergencyContact: "",
    address: "",
    dob: "",
    grade: "",
    chooseServices: "",
    subject: "",
    school: "",
    otherNotes: "",
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentContact: "",
    parentAddress: "",
    group: "",
  };
  

  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFieldValue("profile_images", file);
    }
  };

  const handleUpdate = (values) => {
    console.log(values);
    message.success("profile has been edited")
    navigate(pageRoutes?.studentprofile)
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
                              src={imagePreview || "assets/img/user_profile.png"}
                              alt=""
                              className="ct_img_148"
                            />
                            <label
                              for="ct_edit_profile"
                              style={{ cursor: "pointer" }}
                            >
                              <input
                                type="file"
                                id="ct_edit_profile"
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
                                  id="firstname"
                                  name="firstname" 
                                  values={values?.firstname}
                                  placeholder="Enter first name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="firstname"
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
                                  id="lastname"
                                  name="lastname" 
                                  values={values?.lastname}
                                  placeholder="Enter last name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="lastname"
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
                                  id="contact"
                                  name="contact" 
                                  values={values?.contact}
                                  placeholder="Enter contact "
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="contact"
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
                                  id="emergencyContact"
                                  name="emergencyContact" 
                                  values={values?.emergencyContact}
                                  placeholder="Enter emergency contact"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="emergencyContact"
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
                                  id="dob"
                                  name="dob" 
                                  values={values?.dob}
                                  placeholder="Enter DOB"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="dob"
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
                                  Choose Services
                                </label>
                                <select 
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                id="chooseServices"
                                name="chooseServices"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.chooseServices}
                                >
                                  <option value="1:1 sessions">1:1 sessions</option>
                                  <option value="1:2 sessions">1:2 sessions</option>
                                  <option value="1:3 sessions">1:3 sessions</option>
                                  <option value="1:4 sessions">1:4 sessions</option>
                                </select>
                                <ErrorMessage
                                  name="chooseServices"
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
                                  id="school"
                                  name="school" 
                                  values={values?.school}
                                  placeholder="Enter school"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="school"
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
                                  id="otherNotes"
                                  name="otherNotes" 
                                  values={values?.otherNotes}
                                  placeholder="Type here...."
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="otherNotes"
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
                                  id="parentFirstName"
                                  name="parentFirstName" 
                                  values={values?.parentFirstName}
                                  placeholder="Enter parent first name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="parentFirstName"
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
                                  id="parentLastName"
                                  name="parentLastName" 
                                  values={values?.parentLastName}
                                  placeholder="Enter parent last name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="parentLastName"
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
                                  id="parentEmail"
                                  name="parentEmail" 
                                  values={values?.parentEmail}
                                  placeholder="Enter parent email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="parentEmail"
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
                                  id="parentContact"
                                  name="parentContact" 
                                  values={values?.parentContact}
                                  placeholder="Enter parent contact no."
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="parentContact"
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
                                 Parent Address
                                </label>
                                <textarea
                                  className="ct_input form-control ct_input_40 ct_input_h_52 h-auto"
                                  rows={4}
                                  id="parentAddress"
                                  name="parentAddress" 
                                  values={values?.parentAddress}
                                  placeholder="Type here...."
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <ErrorMessage
                                  name="parentAddress"
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
                                  Group
                                </label>
                                <select 
                                className="ct_input form-control ct_input_40 ct_input_h_52"
                                id="group"
                                name="group"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.group}
                                
                                >
                                  <option value="">Select group name</option>
                                  <option value="Group A">Group A</option>
                                  <option value="Group B">Group B</option>
                                  <option value="Group C">Group C</option>
                                  <option value="Group D">Group D</option>
                                </select>
                                <ErrorMessage
                                  name="group"
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
