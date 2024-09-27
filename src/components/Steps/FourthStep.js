import { Formik } from "formik";
import Loader from "../other/Loader";
import React, { useEffect } from "react";
import AstrickMark from "../other/AstrickMark";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../routes/pageRoutes";
import { BankDetailSchema } from "../../utils/Schema";
import { useDispatch, useSelector } from "react-redux";
import { pipGetTeacherProfile } from "../../utils/pip";
import { bankDetail, fetchProfile } from "../../redux/actions/authAction";
import { handleCurrentStep } from "../../redux/reducers/authReducer";
import ErrorMessage from "../ErrorMessage";

const FourthStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state?.authReducer);
  const { bank_name, account_number, ifsc_code } = pipGetTeacherProfile();
  const initialState = {
    bank_name: bank_name ?? "",
    account_number: account_number ?? "",
    ifsc_code: ifsc_code ?? "",
  };

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  const handleBankDetails = async (values, { setSubmitting }) => {
    const callback = (response) => {
      if (response.success) {
        localStorage.removeItem("register_step");
        navigate(pageRoutes?.dashboard);
      }
    };

    dispatch(bankDetail({ payload: values, callback }));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Formik
      initialValues={initialState}
      validationSchema={BankDetailSchema}
      onSubmit={(values, actions) => {
        handleBankDetails(values, actions);
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
                Banking Details
              </h4>

              <div className="form-group text-start mb-4">
                <label for="" className="ct_ff_roboto mb-2 ct_fw_500">
                  Bank Name
                  <AstrickMark />
                </label>
                <input
                  type="text"
                  className="ct_input form-control ct_input_40" placeholder="Enter bank name"
                  id="bank_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bank_name}
                />
                <ErrorMessage
                  errors={errors}
                  touched={touched}
                  fieldName="bank_name"
                />
              </div>
              <div className="form-group text-start mb-4">
                <label for="" className="ct_ff_roboto mb-2 ct_fw_500">
                  Account No.
                  <AstrickMark />
                </label>
                <input
                  type="text"
                  className="ct_input form-control ct_input_40" placeholder="Enter account no."
                  id="account_number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.account_number}
                />
                <ErrorMessage
                  errors={errors}
                  touched={touched}
                  fieldName="account_number"
                />
              </div>
              <div className="form-group text-start mb-4">
                <label for="" className="ct_ff_roboto mb-2 ct_fw_500">
                  BSB Number <AstrickMark />
                </label>
                <input
                  type="text"
                  className="ct_input form-control ct_input_40" placeholder="Enter BSB number"
                  id="ifsc_code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ifsc_code}
                />
                <ErrorMessage
                  errors={errors}
                  touched={touched}
                  fieldName="ifsc_code"
                />
              </div>
            </div>
            <input
              type="button"
              name="previous"
              className="previous action-button ct_fs_18 ct_fw_600"
              value="Previous"
              onClick={() => dispatch(handleCurrentStep(2))}
            />
            <input
              type="button"
              name="submit"
              className="submit  action-button ct_purple_btn text-white ct_fs_18 "
              value="Submit"
              onClick={handleSubmit}
            />
          </fieldset>
        </form>
      )}
    </Formik>
  );
};

export default FourthStep;
