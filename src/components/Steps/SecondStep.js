import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleCurrentStep } from "../../redux/reducers/authReducer";
import {
  fetchProfile,
  studentAndPricing,
} from "../../redux/actions/authAction";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../ErrorMessage";
import { secondStepSchema } from "../../utils/Schema";
import { pipGetTeacherProfile } from "../../utils/pip";

const SecondStep = () => {
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
              <h4 class="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4">
                Students and Pricing
              </h4>

              <div class="form-group text-start mb-4">
                <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                  Max Students Headcount
                </label>
                <input
                  type="text"
                  class="ct_input form-control ct_input_40"
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
              <div class="form-group text-start mb-4">
                <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                  Per Hour Pricing
                </label>
                <input
                  type="number"
                  class="ct_input form-control ct_input_40"
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
              class="previous action-button ct_fs_18 ct_fw_600"
              value="Previous"
              onClick={() => dispatch(handleCurrentStep(1))}
            />
            <input
              type="button"
              name="next"
              class="next action-button ct_purple_btn text-white ct_fs_18 "
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
