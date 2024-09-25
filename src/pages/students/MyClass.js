import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { pageRoutes } from "../../routes/pageRoutes";
import Header from "../../layout/studentLayout/Header";
import SideBar from "../../layout/studentLayout/SideBar";
import { pipGetStudentProfile, pipViewDate } from "../../utils/pip";
import { fetchMyBookedClasses } from "../../redux/actions/classFeeAction";
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "../../components/formInput/SelectDropdown";
import Loader from "../../components/other/Loader";
import NoRecord from "../../components/other/NoRecord";
import { fetchStudentProfile } from "../../redux/actions/authAction";

function MyClass() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState();
  const { myclassData, options1, isLoading } = useSelector(
    (state) => state?.classFeeReducer
  );

  const sidebarActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (!pipGetStudentProfile()) {
      dispatch(fetchStudentProfile());
    }
    dispatch(fetchMyBookedClasses());
  }, []);

  useEffect(() => {
    if (selectedMonth) dispatch(fetchMyBookedClasses(selectedMonth));
  }, [selectedMonth]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <main className={active ? "" : "ct_collapsed_sidebar"}>
        <SideBar onToggleSidebar={sidebarActive} />
        <div className="ct_right_content">
          <Header onToggleSidebar={sidebarActive} />
          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg ct_mt_28">
              <div className="ct_px_46">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">
                    My Classes
                  </h4>
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    <div>
                      <SelectDropdown
                        id="floatingInputValue"
                        options={options1}
                        defaultOptions="Month"
                        selectedValue={selectedMonth}
                        onChange={setSelectedMonth}
                      />
                    </div>
                    <button
                      className="ct_purple_btn ct_py_12"
                      onClick={() => {
                        navigate(pageRoutes.createStudentClass);
                      }}
                    >
                      Add Timing for New Class
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table ct_custom_table">
                    <thead>
                      <tr>
                        <th>S. No.</th>
                        <th>Teacher Name</th>
                        {/* <th>Streams</th> */}
                        <th>Class Date Time </th>
                        {/* <th>Duration</th> */}
                        <th className="text-end">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myclassData?.length != 0 &&
                        myclassData?.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <img
                                  src={
                                    item?.teacher?.profile_image ??
                                    "../assets/img/user_profile.png"
                                  }
                                  alt=""
                                  className="ct_img_36"
                                />
                                <h5 className="ct_fs_14 ct_fw_600 mb-0">
                                  {item?.teacher?.full_name}
                                </h5>
                              </div>
                            </td>
                            {/* <td>{item?.streams}</td> */}
                            <td>
                              <span className="me-3 ct_fw_600">
                                {pipViewDate(item?.class?.class_date)}
                                {" | "}
                                {item?.class?.start_time}
                                {" to "}
                                {item?.class?.end_time}
                              </span>
                            </td>
                            {/* <td>{item?.duration}</td> */}
                            <td className="text-end">
                              <button
                                className={`ct_purple_btn py-1 px-3 ct_border_radius_10 ${
                                  item?.class_status
                                    ? "ct_purple_bg"
                                    : "ct_grey_bg"
                                }`}
                              >
                                {item?.class_status ? "Completed" : "Pending"}
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  {myclassData?.length == 0 && <NoRecord />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MyClass;
