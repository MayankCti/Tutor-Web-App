import React, { useEffect, useState } from "react";
import MonthInput from "../components/MonthInput";
import Loader from "../components/Loader";

const Classes = () => {
  const [month, setMonth] = useState("");
  const classData = [
    {
      day: "Monday",
      date: "12-09-2024",
      times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
    {
      day: "Tuesday",
      date: "13-09-2024",
      times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
    {
      day: "Wednesday",
      date: "14-09-2024",
      times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
    {
      day: "Thursday",
      date: "15-09-2024",
      times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
    {
      day: "Friday",
      date: "16-09-2024",
      times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
    {
      day: "Saturday",
      date: "17-09-2024",
      times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
  ];
  const isLoading = false;

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div class="ct_inner_dashbaord_main">
        <div class="ct_white_bg ct_mt_28">
          <div class="ct_px_46">
            <div class="d-flex align-items-center justify-content-between gap-2 mb-3">
              <h4 class="ct_fs_22 ct_ff_roboto ct_fw_600">
                {classData?.length ?? 0} Classes This Month
              </h4>
              <MonthInput
                id="monthInput"
                label="Month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </div>
            <div class="row">
              {classData.map((classItem, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <div
                    className="ct_classes_card"
                    data-bs-toggle="modal"
                    data-bs-target="#class_detail_modal"
                  >
                    <span className="ct_fs_14 ct_fw_600 ct_ff_roboto ct_purple_text">
                      {classItem.day}
                    </span>
                    <h5 className="ct_fs_20 mt-3 ct_fw_700 ct_ff_roboto">
                      {classItem.date}
                    </h5>
                    <div className="row mt-4 pt-1">
                      {classItem.times.map((time, idx) => (
                        <div key={idx} className="col-xxl-6 mb-3">
                          <button className="ct_purple_btn ct_border_radius_10 w-100 ct_extra_dark_btn_bg">
                            {time}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Class Detail Modal */}
      <div
        class="modal fade"
        id="class_detail_modal"
        tabindex="-1"
        aria-labelledby="class_detail_modalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content  py-5">
            <div class="modal-body py-0">
              <div>
                <h4 class="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4 text-center">
                  Class Details
                </h4>
                <div>
                  <div class="">
                    <div class="d-flex align-items-center justify-content-between gap-3 ">
                      <div class="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          class="ct_img_36"
                        />
                        <h5 class="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                      <h5 class="ct_fs_14 ct_fw_600 mb-0">Groups</h5>
                    </div>
                    <div class="d-flex align-items-center justify-content-between gap-3 mt-4">
                      <div class="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          class="ct_img_36"
                        />
                        <h5 class="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                      <h5 class="ct_fs_14 ct_fw_600 mb-0">Groups</h5>
                    </div>
                    <div class="d-flex align-items-center justify-content-between gap-3 mt-4">
                      <div class="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          class="ct_img_36"
                        />
                        <h5 class="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                      <h5 class="ct_fs_14 ct_fw_600 mb-0">Groups</h5>
                    </div>
                    <div class="d-flex align-items-center justify-content-between gap-3 mt-4">
                      <div class="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          class="ct_img_36"
                        />
                        <h5 class="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                      <h5 class="ct_fs_14 ct_fw_600 mb-0">Groups</h5>
                    </div>
                    <div class="d-flex align-items-center justify-content-between gap-3 mt-4">
                      <div class="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          class="ct_img_36"
                        />
                        <h5 class="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                      <h5 class="ct_fs_14 ct_fw_600 mb-0">Groups</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classes;
