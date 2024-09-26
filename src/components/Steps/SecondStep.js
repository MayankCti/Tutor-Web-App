import { Formik } from "formik";
import Loader from "../other/Loader";
import {
  fetchProfile,
  studentAndPricing,
} from "../../redux/actions/authAction";
import React, { useEffect } from "react";
import ErrorMessage from "../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { secondStepSchema } from "../../utils/Schema";
import { curSym, pipGetTeacherProfile } from "../../utils/pip";
import { handleCurrentStep } from "../../redux/reducers/authReducer";

const SecondStep = () => {
  const { isLoading } = useSelector((state) => state?.authReducer);
  const dispatch = useDispatch();
  const { max_student_headcount, per_hour_pricing } = pipGetTeacherProfile();
  const initialState = {
    max_student_headcount: max_student_headcount ?? "",
    per_hour_pricing: per_hour_pricing ?? "",
  };

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  const handlePrices = async (values, { setSubmitting }) => {
    dispatch(studentAndPricing({ payload: values }));
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Formik
      initialValues={initialState}
      validationSchema={secondStepSchema}
      onSubmit={(values, actions) => {
        handlePrices(values, actions);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <h4 className="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4">
                Students and Pricing
              </h4>

              <div className="form-group text-start mb-4">
                <label for="" className="ct_ff_roboto mb-2 ct_fw_500">
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
                <label for="" className="ct_ff_roboto mb-2 ct_fw_500">
                  {curSym}{" "}Per Hour Price
                </label>
                <input
                  type="text"
                  className="ct_input form-control ct_input_40"
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
            </div>

            <input
              type="button"
              name="previous"
              className="previous action-button ct_fs_18 ct_fw_600"
              value="Previous"
              onClick={() => dispatch(handleCurrentStep(1))}
            />
            <input
              type="button"
              name="next"
              className="next action-button ct_purple_btn text-white ct_fs_18 "
              value="Next"
              onClick={handleSubmit}
            />
          </fieldset>
        </form>
      )}
    </Formik>
  );
};

export default SecondStep;
