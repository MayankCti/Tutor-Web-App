import React, { useState } from "react";
import FirstStep from "../../components/Steps/FirstStep";
import SecondStep from "../../components/Steps/SecondStep";
import ThirdStep from "../../components/Steps/ThirdStep";
import { useDispatch, useSelector } from "react-redux";
import FourthStep from "../../components/Steps/FourthStep";

const StepForm = () => {
    const dispatch = useDispatch();
  const { currentStep } = useSelector((state) => state?.authReducer);
  const CurrentPage = (pageNo) => {
    switch (pageNo) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourthStep />;

      default:
        break;
    }
  };

  return (
    <section class="">
      <div class="container">
        <div class="ct_logo ct_login_logo">
          <a href="index.html">
            <img src="assets/img/logo.svg" alt="" />
          </a>
        </div>
        <div class="row align-items-center mt-5 pt-5">
          <div class="col-lg-11 mx-auto">
            <form id="msform" action="dashboard.html">
              {/* <!-- progressbar --> */}
              <ul id="progressbar" class="mb-5">
                <li class={currentStep >= 1 ? "active" : ""}>Step 1</li>
                <li class={currentStep >= 2 ? "active" : ""}>Step 2</li>
                <li class={currentStep >= 3 ? "active" : ""}>Step 3</li>
                <li class={currentStep >= 4 ? "active" : ""}>Step 4</li>
              </ul>
              {/* <!-- fieldsets --> */}
              <div class="ct_step_form_inner">{CurrentPage(currentStep)}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepForm;
