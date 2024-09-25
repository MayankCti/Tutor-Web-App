import React, { useEffect, useState } from "react";
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "../../components/formInput/SelectDropdown";
import {
  BookClass,
  fetchTeacherClasses,
  getTeacherList,
} from "../../redux/actions/classFeeAction";
import NoRecord from "../../components/other/NoRecord";
import { getDayName, pipGetTeacherProfile, pipViewDate } from "../../utils/pip";
import { pageRoutes } from "../../routes/pageRoutes";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/other/Loader";

const CreateStudentClass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedClassIds, setSelectedClassIds] = useState([]);
  const { teacherList, isLoading, teacherClassesList } = useSelector(
    (state) => state?.classFeeReducer
  );

  const [active, setActive] = useState(true);

  const sidebarActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    dispatch(getTeacherList());
  }, []);

  const handleTeacherChange = (value) => {
    setSelectedTeacher(Number(value));
  };

  useEffect(() => {
    if (selectedTeacher) {
      dispatch(fetchTeacherClasses({ payload: selectedTeacher }));
    }
  }, [selectedTeacher]);

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelectedClassIds((prevIds) => [...prevIds, id]);
    } else {
      setSelectedClassIds((prevIds) =>
        prevIds?.filter((classId) => classId !== id)
      );
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (selectedClassIds?.length == 0) return;
    const callback = (response) => {
      if (response.success) navigate(pageRoutes.studentmyClass);
    };
    const data = {
      teacher_id: pipGetTeacherProfile()?.id,
      class_ids: selectedClassIds,
    };
    dispatch(BookClass({ payload: data, callback }));
  };

  const getMatchedTeacherValue = (teacherList, selectedTeacher) => {
    const matchedTeacher = teacherList?.find(
      (item) => item?.value === selectedTeacher
    );
    // Return the value if a match is found, otherwise return an empty string
    return matchedTeacher ? matchedTeacher?.label : "";
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <main className={active ? "" : "ct_collapsed_sidebar"}>
      <SideBar onToggleSidebar={sidebarActive} />
      <div className="ct_right_content">
        <Header onToggleSidebar={sidebarActive} />

        <div className="ct_inner_dashbaord_main">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div className="ct_white_bg ct_mt_28 py-4">
                <div className="row">
                  <h4 className="ct_fw_700 ct_fs_24 mb-4 text-center">
                    Book Class
                  </h4>
                </div>
                <div className="row">
                  <div className="col-md-12 mx-auto mb-4">
                    <div className="">
                      <div className="d-flex align-items-center justify-content-end gap-2 mb-4">
                        {/* <p className="ct_fw_700 mb-0 text-center">Select Teacher</p> */}
                        <SelectDropdown
                          className={
                            "form-control py-2   ct_fw_600 w-auto ms-auto"
                          }
                          id="floatingInputValue"
                          options={teacherList}
                          defaultOptions={"Select Teacher"}
                          selectedValue={selectedTeacher}
                          onChange={handleTeacherChange}
                        />
                      </div>
                      <h3 className="ct_fw_700 ct_fs_24 mb-4 ms-2">
                        {getMatchedTeacherValue(teacherList, selectedTeacher) ??
                          ""}
                      </h3>
                      <div className="row">
                        {teacherClassesList?.length != 0 ? (
                          teacherClassesList?.map((item, index) => (
                            <div className="col-lg-4 mb-4">
                              <div className="ct_classes_card ct_class_card_2 py-3">
                                <h4 className="ct_fs_20 ct_fw_700 text-center mb-2">
                                  {getDayName(item?.class_date)}
                                </h4>

                                <p className="mb-0 ct_fw_700">
                                  {pipViewDate(item?.class_date)}
                                </p>

                                <div className="ct_grid_2_col_2 mt-3">
                                  {item?.times?.map((times, index) => (
                                    <div className={`ct_class_chck_bg `}>
                                      <div className={`form-check ${
                                      times?.is_booked
                                        ? "ct_red_bg"
                                        : ""
                                    }`}>
                                        <label
                                          className="form-check-label d-flex"
                                          htmlFor={`flexCheckDefault-${times?.id}`}
                                        >
                                          <input
                                            className={`form-check-input`}
                                            type="checkbox"
                                            id={`flexCheckDefault-${times?.id}`}
                                            checked={selectedClassIds.includes(
                                              times?.id
                                            )} // Check if ID is in the selected list
                                            onChange={(e) =>
                                              handleCheckboxChange(e, times?.id)
                                            } // Handle change
                                            disabled={times?.is_booked ? true : false}
                                          />
                                          <p className="mb-0">
                                            {" "}
                                            {times?.start_time}
                                            {" to "}
                                            {times?.end_time} (
                                            {times?.class_type})
                                          </p>
                                        </label>
                                      </div>
                                    </div>
                                  ))}

                               
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <NoRecord />
                        )}
                      </div>

                      <div className="text-center mt-4">
                        <button
                          className="ct_purple_btn px-5"
                          onClick={(e) => handleSave(e)}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateStudentClass;
