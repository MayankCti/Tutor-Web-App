import React from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

const ImageComparijan = () => {
  return (
    <div>
      <ImgComparisonSlider className="ct_img_compare">
        <img
          slot="first"
          src="assets/img/before_tutor_13.jpg"
        />
        <img
          slot="second"
          src="assets/img/after_tutor_13.jpg"
        />
      </ImgComparisonSlider>
    </div>
  );
};

export default ImageComparijan;
