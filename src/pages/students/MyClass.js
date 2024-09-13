import { date } from "yup";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { pageRoutes } from "../../routes/pageRoutes";
import Header from "../../layout/studentLayout/Header";
import SideBar from "../../layout/studentLayout/SideBar";
import { pipViewDate, pipViewTime } from "../../utils/pip";
import { fetchMyBookedClasses } from "../../redux/actions/classFeeAction";
import { useDispatch, useSelector } from "react-redux";

function MyClass() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const { myclassData } = useSelector((state) => state?.classFeeReducer);
  const sidebarActive = () => {
    setActive(!active);
  };

  const today = new date();

  const handleDateChange = (value) => {
    setSelectedMonth(value);
  };

  useEffect(() => {
    dispatch(fetchMyBookedClasses());
  }, []);

  useEffect(() => {
    const filtered = myclassData?.filter((item) => {
      if (!selectedMonth) return true;
      const itemMonth = moment(item?.class?.class_date).format("MM");
      return itemMonth === selectedMonth;
    });
    setFilteredData(filtered);
  }, [selectedMonth]);

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
                      <select
                        name=""
                        class="form-control py-2 ct_purple_bg text-white ct_select_bg"
                        id="floatingInputValue"
                        onChange={(e) => handleDateChange(e.target.value)}
                      >
                        <option value="">Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="08">August</option>
                      </select>
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
                        <th>Streams</th>
                        <th>Class Date Time </th>
                        <th>Duration</th>
                        <th className="text-end">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData?.map((item, index) => (
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
                          <td>{item?.streams}</td>
                          <td>
                            <span className="me-3 ct_fw_600">
                              {pipViewDate(item?.class?.class_date)}
                              {" | "}
                              {item?.class?.start_time}
                              {" to "}
                              {item?.class?.end_time}
                            </span>
                          </td>
                          <td>{item?.duration}</td>
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
