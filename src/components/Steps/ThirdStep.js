import React from "react";
import { useDispatch } from "react-redux";
import { handleCurrentStep } from "../../redux/reducers/authReducer";

const ThirdStep = () => {
  const dispatch = useDispatch();
  return (
    <fieldset>
      <div>
        <h4 class="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4">Availability</h4>

        <div id="range"></div>
      </div>
      <input
        type="button"
        name="previous"
        class="previous action-button ct_fs_18 ct_fw_600"
        value="Previous"
        onClick={() => dispatch(handleCurrentStep(2))}
      />
      <input
        type="button"
        name="next"
        class="next action-button ct_purple_btn text-white ct_fs_18 "
        value="Next"
        onClick={() => dispatch(handleCurrentStep(4))}
      />
    </fieldset>
  );
};

export default ThirdStep;
