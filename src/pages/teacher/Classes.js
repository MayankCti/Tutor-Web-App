import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "../../components/other/Loader";
import { pageRoutes } from "../../routes/pageRoutes";
import { useDispatch, useSelector } from "react-redux";
import NoRecord from "../../components/other/NoRecord";
import {
  fetchClasses,
  fetchClassesStudents,
  fetchClassesTypes,
  filterClasses,
} from "../../redux/actions/classFeeAction";
import SelectDropdown from "../../components/formInput/SelectDropdown";
import { getDayName, isPastClassTime, pipViewDate } from "../../utils/pip";

const Classes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isToggle } = useSelector((state) => state.authReducer);
  const [selectedValue, setSelectedValue] = useState();
  const [selectedValue1, setSelectedValue1] = useState();
  const { classesList, options, isLoading, options1 } = useSelector(
    (state) => state.classFeeReducer
  );

  useEffect(() => {
    dispatch(fetchClassesTypes());
    dispatch(fetchClasses());
  }, []);

  useEffect(() => {
    if (selectedValue || selectedValue1) {
      dispatch(
        filterClasses({
          classType: selectedValue ?? "",
          month: selectedValue1 ?? "",
        })
      );
    }
  }, [selectedValue, selectedValue1]);

  const handleClassClick = (id) => {
    dispatch(fetchClassesStudents(id));
  };
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
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">
                    Classes This Month
                  </h4>
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <SelectDropdown
                        id="floatingInputValue"
                        defaultOptions="Class Type"
                        options={options}
                        selectedValue={selectedValue}
                        onChange={setSelectedValue}
                      />
                    </div>
                    <div>
                      <SelectDropdown
                        id="floatingInputValue"
                        options={options1}
                        defaultOptions="Month"
                        selectedValue={selectedValue1}
                        onChange={setSelectedValue1}
                      />
                    </div>
                    <div>
                      <button
                        className="ct_purple_btn"
                        onClick={() => navigate(pageRoutes?.createClass)}
                      >
                        <i className="fa-solid fa-plus me-1"></i> Add Class
                      </button>
                    </div>
                  </div>
                </div>
                {classesList?.length != 0 ? (
                  <div className="row">
                    {classesList?.map((classItem, index) => (
                      <div
                        key={index}
                        className="col-xl-3 col-lg-4 col-md-6 mb-4"
                      >
                        <div
                          className="ct_classes_card"
                          // data-bs-toggle="modal"
                          // data-bs-target="#class_detail_modal"
                        >
                          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                            <span className="ct_fs_14 ct_fw_600 ct_ff_roboto">
                              {" "}
                              {getDayName(classItem?.class_date)}
                            </span>
                            <span className="ct_fs_14 ct_fw_600 ct_ff_roboto">
                              {pipViewDate(classItem?.class_date)}
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
                                    time?.is_booked
                                      ? "ct_red_bg"
                                      : "ct_light_darkgreen_bg"
                                  }`}
                                  // onClick={() =>
                                  //   handleClassClick(time?.class_id)
                                  // }
                                >
                                  {time?.start_time}
                                  {" to "}
                                  {time?.end_time}
                                  <br />({time?.class_type})
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <NoRecord />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Class Detail Modal */}
      <div
        className="modal fade"
        id="class_detail_modal"
        tabIndex="-1"
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
                  <ul className="ct_class_detail_time_btn mb-5">
                    <li>
                      <button className="ct_purple_btn ct_outline_btn_purple active">
                        09:00 AM
                      </button>
                    </li>
                    <li>
                      <button className="ct_outline_btn_purple ct_purple_btn">
                        10:00 AM
                      </button>
                    </li>
                    <li>
                      <button className="ct_outline_btn_purple ct_purple_btn">
                        11:00 AM
                      </button>
                    </li>
                    <li>
                      <button className="ct_outline_btn_purple ct_purple_btn">
                        12:00 AM
                      </button>
                    </li>
                  </ul>
                  <div className="">
                    <div className="d-flex align-items-center justify-content-between gap-3 ">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="../assets/img/user_profile.png"
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
                          src="../assets/img/user_profile.png"
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
                          src="../assets/img/user_profile.png"
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
                          src="../assets/img/user_profile.png"
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
                          src="../assets/img/user_profile.png"
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
