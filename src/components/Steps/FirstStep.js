import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { basicDetailSchema } from "../../utils/Schema";
import ErrorMessage from "../ErrorMessage";
import Loader from "../other/Loader";
import {
  createBasicDetail,
  fetchProfile,
} from "../../redux/actions/authAction";
import { pipGetTeacherProfile } from "../../utils/pip";

const FirstStep = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState();
  const { isLoading } = useSelector((state) => state.authReducer);
  const {
    theme,
    coaching_classes_name,
    contact_number,
    stream,
    address,
    file,
    full_name,
  } = pipGetTeacherProfile();

  const initialState = {
    full_name: full_name ?? "",
    theme: theme ?? "",
    coaching_classes_name: coaching_classes_name ?? "",
    contact_number: contact_number
      ? contact_number[0] === "0"
        ? contact_number
        : contact_number?.length == 10
        ? contact_number
        : `0${contact_number}`
      : "",
    stream: stream ?? "",
    address: address ?? "",
    file: file ?? "",
  };

  useEffect(() => {
    dispatch(fetchProfile()).then((profile) => {
      const formStatus = profile?.payload?.data?.form_completed;
      console.log({ object: formStatus });
      setStep(formStatus);
    });
  }, []);

  const handleBasicDetail = async (values, { setSubmitting }) => {
    const data = new FormData();
    Object?.keys(values)?.map((element, index) => {
      typeof values["file"] == "string"
        ? element != "file" && data.append(element, values[element])
        : data.append(element, values[element]);
    });
    dispatch(createBasicDetail({ payload: data }));
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={basicDetailSchema}
        onSubmit={(values, actions) => {
          handleBasicDetail(values, actions);
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
                  Basic Details
                </h4>
                <div className="ct_profile_img">
                  {console.log(typeof values?.file == "string")}
                  <img
                    src={
                      values?.file
                        ? typeof values?.file == "string"
                          ? values?.file
                          : URL.createObjectURL(values?.file)
                        : "assets/img/user_profile.png"
                    }
                    className="ct_img_148"
                  />
                  <label for="ct_edit_profile">
                    <input
                      type="file"
                      id="ct_edit_profile"
                      className="d-none"
                      onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }}
                      onBlur={handleBlur}
                    />
                    <div className="ct_edit_profile_icon">
                      <i className="fa-solid fa-pen"></i>
                    </div>
                  </label>
                </div>
                <ErrorMessage
                  errors={errors}
                  touched={touched}
                  fieldName="file"
                />
                <div className="form-group text-start mb-4">
                  <label for="" className="ct_ff_roboto mb-2 ct_fw_500">
                    Full Name
                  </label>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="ct_input form-control ct_input_40"
                      value={values.full_name}
                      id="full_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <ErrorMessage
                      errors={errors}
                      touched={touched}
                      fieldName="full_name"
                    />
                  </div>
                </div>
                <div className="form-group text-start mb-4">
                  <label for="" className="ct_ff_roboto mb-2 ct_fw_500">
                    Theme color code
                  </label>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="ct_input ct_color_input form-control"
                      value={values.theme}
                      id="theme"
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                <div className="form-group text-start mb-4">
                  <label for="" className="ct_ff_roboto mb-2 ct_fw_500">
                    Classes Name
                  </label>
                  <input
                    type="text"
                    className="ct_input form-control ct_input_40"
                    id="coaching_classes_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.coaching_classes_name}
                  />
                  <ErrorMessage
                    errors={errors}
                    touched={touched}
                    fieldName="coaching_classes_name"
                  />
                </div>

                <div className="form-group text-start mb-4">
                  <label for="" className="ct_ff_roboto mb-2 ct_fw_500">
                    Contact No.
                  </label>
                  <input
                    type="text"
                    className="ct_input form-control ct_input_40"
                    id="contact_number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contact_number}
                  />
                  <ErrorMessage
                    errors={errors}
                    touched={touched}
                    fieldName="contact_number"
                  />
                </div>
                <div className="form-group text-start mb-4">
                  <label for="" className="ct_ff_roboto mb-2 ct_fw_500">
                    Stream
                  </label>
                  <input
                    type="text"
                    className="ct_input form-control ct_input_40"
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
                  <label for="" className="ct_ff_roboto mb-2 ct_fw_500">
                    Address
                  </label>
                  <textarea
                    className="ct_input form-control h-auto ct_input_40"
                    rows="4"
                    id="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  ></textarea>
                  <ErrorMessage
                    errors={errors}
                    touched={touched}
                    fieldName="address"
                  />
                </div>
              </div>
              <input
                type="button"
                name="next"
                className="next action-button ct_purple_btn text-white ct_fs_18 ms-0  ct_first_next_full"
                value="Next"
                onClick={handleSubmit}
              />
            </fieldset>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirstStep;
