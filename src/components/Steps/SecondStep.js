import React from 'react'
import { useDispatch } from 'react-redux';
import { handleCurrentStep } from '../../redux/reducers/authReducer';

const SecondStep = () => {
  const dispatch = useDispatch();
  return (
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
        />
      </div>
      <div class="form-group text-start mb-4">
        <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
          Per Hour Pricing
        </label>
        <input
          type="number"
          class="ct_input form-control ct_input_40"
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
      onClick={() => dispatch(handleCurrentStep(3))}
    />
  </fieldset>
  )
}

export default SecondStep
