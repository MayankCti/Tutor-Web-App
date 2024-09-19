import React from "react";
import moment from "moment";
import { Formik } from "formik";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import Loader from "../../components/other/Loader";
import { pageRoutes } from "../../routes/pageRoutes";
import { useDispatch, useSelector } from "react-redux";
import { createStudentSchema } from "../../utils/Schema";
import ErrorMessage from "../../components/ErrorMessage";
import { useLocation, useNavigate } from "react-router-dom";
import FormInput from "../../components/formInput/FormInput";
import AstrickMark from "../../components/other/AstrickMark";
import { updateStudent } from "../../redux/actions/studentAction";

const EditStudentDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isToggle } = useSelector((state) => state.authReducer);
  const { isLoading } = useSelector((state) => state.studentReducer);
  const sharedData = useLocation()?.state?.studentDetails || {};
  const {
    first_name = "",
    last_name = "",
    email = "",
    contact_number = "",
    emergency_contact_number = "",
    student_status = "",
    address = "",
    date_of_birth = "",
    grade = "",
    city = "",
    school_name = "",
    id = "",
  } = sharedData;

  const initialState = {
    first_name,
    last_name,
    email,
    contact_number,
    emergency_contact_number,
    student_status,
    address,
    date_of_birth: date_of_birth
      ? moment(date_of_birth).format("YYYY-MM-DD")
      : null,
    grade,
    city,
    school_name,
    student_id: id,
  };

  console.log(initialState);
  const handleCreateStudent = async (values, { setSubmitting }) => {
    const callback = (response) => {
      if (response.success) navigate(pageRoutes?.student);
    };
    dispatch(updateStudent({ payload: values, callback }));
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
                <div class="modal-content  py-5">
                  <div class="modal-body py-0">
                    <h4 class="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4 text-center">
                      Edit Student Details
                    </h4>
                    <Formik
                      initialValues={initialState}
                      validationSchema={createStudentSchema}
                      onSubmit={(values, actions) => {
                        handleCreateStudent(values, actions);
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
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group text-start mb-4">
                                <label
                                  for="first_name"
                                  class="ct_ff_roboto mb-2 ct_fw_500"
                                >
                                  First Name <AstrickMark />
                                </label>
                                <FormInput
                                  id="first_name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.first_name}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  touched={touched}
                                  fieldName="first_name"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group text-start mb-4">
                                <label
                                  for="last_name"
                                  class="ct_ff_roboto mb-2 ct_fw_500"
                                >
                                  Last Name
                                </label>
                                <FormInput
                                  id="last_name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.last_name}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  touched={touched}
                                  fieldName="last_name"
                                />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group text-start mb-4">
                                <label
                                  for="email"
                                  class="ct_ff_roboto mb-2 ct_fw_500"
                                >
                                  Email  <AstrickMark />
                                </label>
                                <FormInput
                                  id="email"
                                  type="email"
                                  disabled
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.email}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  touched={touched}
                                  fieldName="email"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group text-start mb-4">
                                <label
                                  for="contact_number"
                                  class="ct_ff_roboto mb-2 ct_fw_500"
                                >
                                  Contact No.
                                </label>
                                <FormInput
                                  id="contact_number"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.contact_number}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  touched={touched}
                                  fieldName="contact_number"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group text-start mb-4">
                                <label
                                  for=""
                                  class="ct_ff_roboto mb-2 ct_fw_500"
                                >
                                  Emergency Contact No.
                                </label>
                                <FormInput
                                  id="emergency_contact_number"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.emergency_contact_number}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  touched={touched}
                                  fieldName="emergency_contact_number"
                                />
                              </div>
                            </div>
                            <div class="col-md-12 mb-4">
                              <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                                Student Status
                              </label>
                              <div class="d-flex align-items-center flex-wrap gap-3">
                                <div class="form-check">
                                  <FormInput
                                    id="student_status1"
                                    className="form-check-input"
                                    type="radio"
                                    name="student_status"
                                    value="Active"
                                    checked={values.student_status === "Active"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />

                                  <label
                                    class="form-check-label ct_fs_14 ct_ff_roboto"
                                    for="student_status1"
                                    style={{
                                      backgroundColor:
                                        "rgba(124, 210, 114, 0.4)",
                                      color: "#13B500",
                                    }}
                                  >
                                    Active
                                  </label>
                                </div>

                                <div class="form-check">
                                  <FormInput
                                    id="student_status5"
                                    className="form-check-input"
                                    type="radio"
                                    name="student_status"
                                    value="Inactive"
                                    checked={
                                      values.student_status === "Inactive"
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />

                                  <label
                                    class="form-check-label ct_fs_14 ct_ff_roboto"
                                    for="flexRadioDefault5"
                                    style={{
                                      backgroundColor:
                                        "rgba(118, 118, 118, 0.4)",
                                      color: "#767676",
                                    }}
                                  >
                                    Inactive
                                  </label>
                                </div>
                              </div>
                              <ErrorMessage
                                errors={errors}
                                touched={touched}
                                fieldName="student_status"
                              />
                            </div>
                            <div class="col-md-12">
                              <div class="form-group text-start mb-4">
                                <label
                                  for="address"
                                  class="ct_ff_roboto mb-2 ct_fw_500"
                                >
                                  Address
                                </label>
                                <textarea
                                  class="ct_input form-control ct_input_40 h-auto"
                                  rows="4"
                                  placeholder="Type here...."
                                  id="address"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.address}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  touched={touched}
                                  fieldName="address"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group text-start mb-4">
                                <label
                                  for="date_of_birth"
                                  class="ct_ff_roboto mb-2 ct_fw_500"
                                >
                                  DOB
                                </label>

                                <FormInput
                                  id="date_of_birth"
                                  type="date"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.date_of_birth}
                                  max={new Date()?.toISOString()?.split("T")[0]}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  touched={touched}
                                  fieldName="date_of_birth"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group text-start mb-4">
                                <label
                                  for="grade"
                                  class="ct_ff_roboto mb-2 ct_fw_500"
                                >
                                  Grade
                                </label>
                                <FormInput
                                  id="grade"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.grade}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  touched={touched}
                                  fieldName="grade"
                                />
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="form-group text-start mb-4">
                                <label
                                  for=""
                                  class="ct_ff_roboto mb-2 ct_fw_500"
                                >
                                  School Name
                                </label>
                                <FormInput
                                  id="school_name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.school_name}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  touched={touched}
                                  fieldName="school_name"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group text-start mb-4">
                                <label
                                  for=""
                                  class="ct_ff_roboto mb-2 ct_fw_500"
                                >
                                  City
                                </label>
                                <FormInput
                                  id="city"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.city}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  touched={touched}
                                  fieldName="city"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center gap-3">
                            <button
                              type="button"
                              class="ct_purple_btn ct_outline_btn_purple  w-50"
                              onClick={() => navigate(-1)}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              class="ct_purple_btn w-50"
                              onClick={handleSubmit}
                            >
                              Update
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EditStudentDetail;
