import React, { useEffect, useState } from "react";
import Loader from "../../components/other/Loader";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { useSelector } from "react-redux";
import SelectDropdown from "../../components/formInput/SelectDropdown";

const Classes = () => {
  const { isToggle } = useSelector((state) => state.authReducer);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [selectedValue1, setSelectedValue1] = useState("option1");
  const options = [
    { value: "Class type", label: "Class type" },
    { value: "1:1 Classes", label: "1:1 Classes" },
    { value: "Group Class", label: "Group Class" },
    { value: "School Readiness", label: "School Readiness" },
    { value: "Homework Clubs", label: "Homework Clubs" },
  ];
  const options1 = [
    { value: "Month", label: "Month" },
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
  ];

  const classData = [
    {
      day: "Monday",
      name: "Group Class",
      date: "12-09-2024",
      times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
    {
      day: "Tuesday",
      name: "1:1 Classes",
      date: "13-09-2024",
      times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
    {
      day: "Wednesday",
      name: "Group Class",
      date: "14-09-2024",
      times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
    {
      day: "Thursday",
      name: "Group Class",
      date: "15-09-2024",
      times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
    {
      day: "Friday",
      name: "1:1 Classes",
      date: "16-09-2024",
      times: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 AM"],
    },
    {
      day: "Saturday",
      name: "School Readiness",
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
      <main className={isToggle ? "ct_collapsed_sidebar" : ""}>
        <Sidebar />
        <div className="ct_right_content">
          <Headers />
          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg ct_mt_28">
              <div className="ct_px_46">
                <div class="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <h4 class="ct_fs_22 ct_ff_roboto ct_fw_600">
                    Classes This Month
                  </h4>
                  <div class="d-flex align-items-center gap-2">
                    <div>
                      <SelectDropdown
                        id="floatingInputValue"
                        options={options}
                        selectedValue={selectedValue}
                        onChange={setSelectedValue}
                      />
                    </div>
                    <div>
                      <SelectDropdown
                        id="floatingInputValue"
                        options={options1}
                        selectedValue={selectedValue1}
                        onChange={setSelectedValue1}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  {classData?.map((classItem, index) => (
                    <div
                      key={index}
                      className="col-xl-3 col-lg-4 col-md-6 mb-4"
                    >
                      <div
                        className="ct_classes_card"
                        data-bs-toggle="modal"
                        data-bs-target="#class_detail_modal"
                      >
                        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                          <span class="ct_fs_14 ct_fw_600 ct_ff_roboto">
                            {" "}
                            {classItem?.day}
                          </span>
                          <span class="ct_fs_14 ct_fw_600 ct_ff_roboto">
                            {classItem?.date}
                          </span>
                        </div>

                        <h5 className="ct_fs_20 mt-3 ct_fw_700 ct_ff_roboto text-start">
                          {classItem?.name}
                        </h5>
                        <div className="row mt-4 pt-1">
                          {classItem?.times.map((time, idx) => (
                            <div key={idx} className="col-xxl-6 mb-3">
                              <button
                                className={`ct_purple_btn ct_border_radius_10 w-100 ct_extra_dark_btn_bg ${
                                  time == "09:00 AM"
                                    ? "ct_red_bg"
                                    : "ct_light_darkgreen_bg"
                                }`}
                              >
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
        </div>
      </main>

      {/* Class Detail Modal */}
      <div
        className="modal fade"
        id="class_detail_modal"
        tabindex="-1"
        aria-labelledby="class_detail_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content  py-5">
            <div className="modal-body py-0">
              <div>
                <h4 className="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4 text-center">
                  Class Details
                </h4>
                <div>
                  <ul class="ct_class_detail_time_btn mb-5">
                    <li>
                      <button class="ct_purple_btn ct_outline_btn_purple active">
                        09:00 AM
                      </button>
                    </li>
                    <li>
                      <button class="ct_outline_btn_purple ct_purple_btn">
                        10:00 AM
                      </button>
                    </li>
                    <li>
                      <button class="ct_outline_btn_purple ct_purple_btn">
                        11:00 AM
                      </button>
                    </li>
                    <li>
                      <button class="ct_outline_btn_purple ct_purple_btn">
                        12:00 AM
                      </button>
                    </li>
                  </ul>
                  <div className="">
                    <div className="d-flex align-items-center justify-content-between gap-3 ">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                      <h5 className="ct_fs_14 ct_fw_600 mb-0">Groups</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mt-4">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                      <h5 className="ct_fs_14 ct_fw_600 mb-0">Groups</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mt-4">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                      <h5 className="ct_fs_14 ct_fw_600 mb-0">Groups</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mt-4">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                      <h5 className="ct_fs_14 ct_fw_600 mb-0">Groups</h5>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mt-4">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                      <h5 className="ct_fs_14 ct_fw_600 mb-0">Groups</h5>
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
