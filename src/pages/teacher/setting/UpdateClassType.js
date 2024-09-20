import { Formik } from "formik";
import Sidebar from "../../../layout/Sidebar";
import Headers from "../../../layout/Headers";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "../../../components/other/Loader";
import { useDispatch, useSelector } from "react-redux";
import { pageRoutes } from "../../../routes/pageRoutes";
import ErrorMessage from "../../../components/ErrorMessage";
import { createClassTypeSchema } from "../../../utils/Schema";
import {
  createClassType,
  updateClassType,
} from "../../../redux/actions/classFeeAction";

const UpdateClassType = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = useLocation()?.state;
  const { isToggle, isLoading } = useSelector((state) => state.authReducer);

  if (isLoading) {
    return <Loader />;
  }

  const handleUpdateClassType = async (values, { setSubmitting }) => {
    const callback = (response) => {
      if (response.success) navigate(pageRoutes?.setting);
    };
    dispatch(updateClassType({ payload: values, callback }));
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
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">
                    Update Class Type
                  </h4>
                </div>
                <Formik
                  initialValues={initialState}
                  validationSchema={createClassTypeSchema}
                  onSubmit={(values, actions) => {
                    handleUpdateClassType(values, actions);
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
                          <div className="form-group  mb-4">
                            <label
                              for=""
                              className="d-flex align-items-center justify-content-between mb-2"
                            >
                              <span className="ct_fw_600 ct_fs_20">Class Type</span>
                            </label>
                            <div className="position-relative">
                              <input
                                type="text"
                                value={values?.class_type_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="class_type_name"
                                className="form-control ct_input ct_ff_roboto"
                                placeholder="Enter class type"
                                disabled
                              />
                            </div>
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="class_type_name"
                            />
                          </div>
                          <div className="form-group  mb-4">
                            <label
                              for=""
                              className="d-flex align-items-center justify-content-between mb-2"
                            >
                              <span className="ct_fw_600 ct_fs_20">
                                Student Count
                              </span>
                            </label>
                            <div className="position-relative">
                              <input
                                type="text"
                                id="student_count"
                                value={values?.student_count}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="form-control ct_input ct_ff_roboto"
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
                      <div className="text-center mt-4">
                        <button
                          className="ct_purple_btn px-5"
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
      </main>
    </>
  );
};

export default UpdateClassType;
