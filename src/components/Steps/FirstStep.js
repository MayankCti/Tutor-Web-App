import React from "react";
import { useDispatch } from "react-redux";
import { handleCurrentStep } from "../../redux/reducers/authReducer";

const FirstStep = () => {
  const dispatch = useDispatch();
  return (
    <>
      <fieldset>
        <div>
          <h4 class="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4">Basic Details</h4>
          <div class="ct_profile_img">
            <img src="assets/img/profile_img2.png" alt="" class="ct_img_148" />
            <label for="ct_edit_profile">
              <input type="file " id="ct_edit_profile" class="d-none" />
              <div class="ct_edit_profile_icon">
                <i class="fa-solid fa-pen"></i>
              </div>
            </label>
          </div>

          <div class="form-group text-start mb-4">
            <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
              Theme color code
            </label>
            <div class="position-relative">
              <input type="text" class="ct_input ct_color_input form-control" />
              <input type="color" class="ct_color" value="#0098A8" />
            </div>
          </div>
          <div class="form-group text-start mb-4">
            <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
              Classes Name <span class="ct_required_star">*</span>
            </label>
            <input type="text" class="ct_input form-control ct_input_40" />
          </div>
          <div class="form-group text-start mb-4">
            <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
              Email
            </label>
            <input type="email" class="ct_input form-control ct_input_40" />
          </div>
          <div class="form-group text-start mb-4">
            <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
              Contact No.
            </label>
            <input type="number" class="ct_input form-control ct_input_40" />
          </div>
          <div class="form-group text-start mb-4">
            <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
              Stream
            </label>
            <input type="text" class="ct_input form-control ct_input_40" />
          </div>
          <div class="form-group text-start mb-4">
            <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
              Address
            </label>
            <textarea
              class="ct_input form-control h-auto ct_input_40"
              rows="4"
            ></textarea>
          </div>
        </div>
        <input
          type="button"
          name="next"
          class="next action-button ct_purple_btn text-white ct_fs_18 ms-0  ct_first_next_full"
          value="Next"
          onClick={() => dispatch(handleCurrentStep(2))}
        />
      </fieldset>
    </>
  );
};

export default FirstStep;
