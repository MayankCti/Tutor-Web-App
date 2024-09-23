import React from "react";
import FirstStep from "../../components/Steps/FirstStep";
import SecondStep from "../../components/Steps/SecondStep";
import ThirdStep from "../../components/Steps/ThirdStep";
import { useDispatch, useSelector } from "react-redux";
import FourthStep from "../../components/Steps/FourthStep";

const StepForm = () => {
  const { currentStep } = useSelector((state) => state?.authReducer);
  const CurrentPage = (pageNo) => {
    switch (pageNo) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <FourthStep />;
      default:
        break;
    }
  };

  return (
    <section className="">
      <div className="container">
        <div className="ct_logo ct_login_logo">
          <a href="javascript:void(0)">
            <img src="assets/img/logo.svg" alt="" />
          </a>
        </div>
        <div className="row align-items-center mt-5 pt-5">
          <div className="col-lg-11 mx-auto">
            <form
              id="msform"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {/* <!-- progressbar --> */}
              <ul id="progressbar" className="mb-5">
                {[1, 2, 3]?.map((item, index) => (
                  <li
                    key={index}
                    class={currentStep >= index + 1 ? "active" : ""}
                  >
                    Step {index + 1}
                  </li>
                ))}
              </ul>
              <div className="ct_step_form_inner">{CurrentPage(currentStep)}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepForm;
