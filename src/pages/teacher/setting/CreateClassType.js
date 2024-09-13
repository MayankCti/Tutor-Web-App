import { Formik } from "formik";
import Sidebar from "../../../layout/Sidebar";
import Headers from "../../../layout/Headers";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "../../../components/other/Loader";
import { useDispatch, useSelector } from "react-redux";
import { pageRoutes } from "../../../routes/pageRoutes";
import ErrorMessage from "../../../components/ErrorMessage";
import { createClassTypeSchema } from "../../../utils/Schema";
import { createClassType } from "../../../redux/actions/classFeeAction";

const CreateClassType = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isToggle, isLoading } = useSelector((state) => state.authReducer);

  const initialState = {
    class_type_name: "",
    student_count: "",
  };

  if (isLoading) {
    return <Loader />;
  }

  const handleCreateStudent = async (values, { setSubmitting }) => {
    const callback = (response) => {
      if (response.success) navigate(pageRoutes?.setting);
    };
    dispatch(createClassType({ payload: values, callback }));
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
                <div class="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
                  <h4 class="ct_fs_22 ct_ff_roboto ct_fw_600">
                    Create Class Type
                  </h4>
                </div>
                <Formik
                  initialValues={initialState}
                  validationSchema={createClassTypeSchema}
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
                        <div class="col-lg-6 mx-auto">
                          <div class="form-group  mb-4">
                            <label
                              for=""
                              class="d-flex align-items-center justify-content-between mb-2"
                            >
                              <span class="ct_fw_600 ct_fs_20">Class Type</span>
                            </label>
                            <div class="position-relative">
                              <input
                                type="text"
                                value={values?.class_type_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="class_type_name"
                                class="form-control ct_input ct_ff_roboto"
                                placeholder="Enter class type"
                              />
                            </div>
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="class_type_name"
                            />
                          </div>
                          <div class="form-group  mb-4">
                            <label
                              for=""
                              class="d-flex align-items-center justify-content-between mb-2"
                            >
                              <span class="ct_fw_600 ct_fs_20">
                                Student Count
                              </span>
                            </label>
                            <div class="position-relative">
                              <input
                                type="text"
                                id="student_count"
                                value={values?.student_count}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                class="form-control ct_input ct_ff_roboto"
                                placeholder="Enter student count"
                              />
                            </div>
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="student_count"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="text-center mt-4">
                        <button
                          class="ct_purple_btn px-5"
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

export default CreateClassType;
