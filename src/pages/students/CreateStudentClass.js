import React, { useEffect, useState } from "react";
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "../../components/formInput/SelectDropdown";
import {
  fetchTeacherClasses,
  getTeacherList,
} from "../../redux/actions/classFeeAction";

const CreateStudentClass = () => {
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const { teacherList, teacherClasses, isLoading, error } = useSelector(
    (state) => state?.classFeeReducer
  );
  const dispatch = useDispatch();

  const [active, setActive] = useState(true);

  const sidebarActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    dispatch(getTeacherList());
  }, [dispatch]);

  const handleTeacherChange = (value) => {
    setSelectedTeacher(Number(value));
  };

  useEffect(() => {
    if (selectedTeacher) {
      dispatch(fetchTeacherClasses({ payload: selectedTeacher }));
    }
  }, [selectedTeacher, dispatch]);

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

                      <div className="row">
                        <div className="col-lg-4 mb-4">
                          <div className="ct_classes_card ct_class_card_2 py-3">
                            <h4 className="ct_fs_20 ct_fw_700 text-center mb-2">
                              Monday
                            </h4>
                            <p className="mb-0 ct_fw_700">12-09-2024</p>

                            <div class="ct_grid_2_col_2 mt-3">
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault2"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault2"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault3"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault3"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault4"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault4"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                          <div className="ct_classes_card ct_class_card_2 py-3">
                            <h4 className="ct_fs_20 ct_fw_700 text-center mb-2">
                              Monday
                            </h4>
                            <p className="mb-0 ct_fw_700">12-09-2024</p>

                            <div class="ct_grid_2_col_2 mt-3">
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault5"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault5"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault6"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault6"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault7"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault7"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault4"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault4"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                          <div className="ct_classes_card ct_class_card_2 py-3">
                            <h4 className="ct_fs_20 ct_fw_700 text-center mb-2">
                              Monday
                            </h4>
                            <p className="mb-0 ct_fw_700">12-09-2024</p>

                            <div class="ct_grid_2_col_2 mt-3">
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault9"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault9"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault10"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault10"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault11"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault11"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                              <div className="ct_class_chck_bg">
                                <div class="form-check">
                                  <label
                                    class="form-check-label d-flex"
                                    for="flexCheckDefault12"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault12"
                                    />
                                    <p className="mb-0"> 9 - 10Am</p>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <h4 className="ct_fw_700 mb-4 text-center">Select Class Period</h4> */}
                      {/* <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label d-flex justify-content-between" for="flexCheckDefault">
                <p className="mb-0"> 29 July 2024</p>
                <p className="mb-0"> 9 - 10Am</p>
                </label>
                </div>
                <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label d-flex justify-content-between" for="flexCheckDefault">
                <p className="mb-0"> 29 July 2024</p>
                <p className="mb-0"> 9 - 10Am</p>
                </label>
                </div>
                <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label d-flex justify-content-between" for="flexCheckDefault">
                <p className="mb-0"> 29 July 2024</p>
                <p className="mb-0"> 9 - 10Am</p>
                </label>
                </div>
                <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label d-flex justify-content-between" for="flexCheckDefault">
                <p className="mb-0"> 29 July 2024</p>
                <p className="mb-0"> 9 - 10Am</p>
                </label>
                </div> */}

                      {/* <div className="text-center mt-4">
               <button className="ct_purple_btn px-5">Save</button>
               </div> */}
                    </div>
                  </div>
                </div>

                {isLoading && <p>Loading classes...</p>}
                {error && (
                  <p style={{ color: "red" }}>
                    Failed to load classes: {error}
                  </p>
                )}
                {!isLoading && teacherClasses && (
                  <div className="class-list">
                    {/* Render classes for the selected teacher */}
                    {teacherClasses.map((classItem) => (
                      <div key={classItem.id}>
                        <p>{classItem.className}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateStudentClass;
