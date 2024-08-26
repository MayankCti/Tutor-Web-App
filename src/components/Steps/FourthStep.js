import React from "react";
import { useDispatch } from "react-redux";
import { handleCurrentStep } from "../../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../routes/pageRoutes";
const FourthStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <fieldset>
      <div>
        <h4 class="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4">Banking Details</h4>

        <div class="form-group text-start mb-4">
          <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
            Banking Name<span class="ct_required_star">*</span>
          </label>
          <input type="text" class="ct_input form-control ct_input_40" />
        </div>
        <div class="form-group text-start mb-4">
          <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
            Account No.<span class="ct_required_star">*</span>
          </label>
          <input type="number" class="ct_input form-control ct_input_40" />
        </div>
        <div class="form-group text-start mb-4">
          <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
            IFSC Code <span class="ct_required_star">*</span>
          </label>
          <input type="number" class="ct_input form-control ct_input_40" />
        </div>
      </div>
      <input
        type="button"
        name="previous"
        class="previous action-button ct_fs_18 ct_fw_600"
        value="Previous"
        onClick={() => dispatch(handleCurrentStep(3))}
      />
      <input
        type="button"
        name="submit"
        class="submit  action-button ct_purple_btn text-white ct_fs_18 "
        value="Submit"
        onClick={() => {
          localStorage.removeItem("register_step");
          navigate(pageRoutes?.dashboard);
        }}
      />
    </fieldset>
  );
};

export default FourthStep;
