import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import Loader from "../../components/other/Loader";
import StudentTable from "../../components/StudentTable";
import SelectDropdown from "../../components/formInput/SelectDropdown";

const Student = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const { isToggle } = useSelector((state) => state.authReducer);
  const { isLoading, students } = useSelector((state) => state?.studentReducer);
  const options = [
    { value: "all", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
    { value: "Prospective", label: "Prospective" },
  ];

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
                  <h4 class="ct_fs_22 ct_ff_roboto ct_fw_600">All Students</h4>
                  <div class="d-flex align-items-center gap-3 flex-wrap">
                    <div>
                      <SelectDropdown
                        id="floatingInputValue"
                        options={options}
                        selectedValue={statusFilter}
                        onChange={setStatusFilter}
                      />
                    </div>
                    <button class="ct_purple_btn">
                      <i class="fa-solid fa-arrow-up-from-bracket me-3"></i>{" "}
                      Bulk upload
                    </button>
                    <button
                      class="ct_purple_btn "
                      data-bs-toggle="modal"
                      data-bs-target="#add_student"
                    >
                      Add Student
                    </button>
                  </div>
                </div>
                <StudentTable statusFilter={statusFilter} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/*Add Student modal  */}
      <div
        class="modal fade"
        id="add_student"
        tabindex="-1"
        aria-labelledby="add_studentLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content  py-5">
            <div class="modal-body py-0">
              <h4 class="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4 text-center">
                Add Student Details
              </h4>
              <form action="">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        First Name <span class="ct_required_star">*</span>
                      </label>
                      <input
                        type="text"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Email Address <span class="ct_required_star">*</span>
                      </label>
                      <input
                        type="email"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Contact No.
                      </label>
                      <input
                        type="text"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Emergency Contact No.
                      </label>
                      <input
                        type="text"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-12 mb-4">
                    <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                      Student Status
                    </label>
                    <div class="d-flex align-items-center flex-wrap gap-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          class="form-check-label ct_fs_14 ct_ff_roboto"
                          for="flexRadioDefault1"
                          style={{
                            backgroundColor: "rgba(124, 210, 114, 0.4)",
                            color: "#13B500",
                          }}
                        >
                          Active
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          class="form-check-label ct_fs_14 ct_ff_roboto"
                          for="flexRadioDefault2"
                          style={{
                            backgroundColor: "rgba(35, 171, 185, 0.4)",
                            color: "#23ABB9",
                          }}
                        >
                          Trial
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                        <label
                          class="form-check-label ct_fs_14 ct_ff_roboto"
                          for="flexRadioDefault3"
                          style={{
                            backgroundColor: "rgba(170, 98, 68, 0.4)",
                            color: "#AA6244",
                          }}
                        >
                          Waiting
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                        />
                        <label
                          class="form-check-label ct_fs_14 ct_ff_roboto"
                          for="flexRadioDefault4"
                          style={{
                            backgroundColor: "rgba(125, 68, 170, 0.4)",
                            color: "#7D44AA",
                          }}
                        >
                          Lead
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault5"
                        />
                        <label
                          class="form-check-label ct_fs_14 ct_ff_roboto"
                          for="flexRadioDefault5"
                          style={{
                            backgroundColor: "rgba(118, 118, 118, 0.4)",
                            color: "#767676",
                          }}
                        >
                          Inactive
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Address
                      </label>
                      <textarea
                        class="ct_input form-control ct_input_40 h-auto"
                        rows="4"
                        placeholder="Type here...."
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        DOB
                      </label>
                      <input
                        type="date"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Grade
                      </label>
                      <input
                        type="text"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Choose Services
                      </label>
                      <select class="ct_input form-control ct_input_40">
                        <option value="">1:1 sessions</option>
                        <option value="">1:2 sessions</option>
                        <option value="">1:3 sessions</option>
                        <option value="">1:4 sessions</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Subject
                      </label>
                      <select class="ct_input form-control ct_input_40">
                        <option value="">Science</option>
                        <option value="">Maths</option>
                        <option value="">Physics</option>
                        <option value="">Chemestry</option>
                        <option value="">Hindi</option>
                        <option value="">English</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        School
                      </label>
                      <input
                        type="text"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Other Notes
                      </label>
                      <textarea
                        class="ct_input form-control ct_input_40 h-auto"
                        rows="4"
                        placeholder="Type here...."
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-md-12 mb-4">
                    <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                      Student Type
                    </label>
                    <div class="d-flex align-items-center flex-wrap gap-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="adult"
                          checked
                        />
                        <label
                          class="form-check-label ct_fs_14 ct_ff_roboto"
                          for="adult"
                        >
                          Adult
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="child"
                        />
                        <label
                          class="form-check-label ct_fs_14 ct_ff_roboto"
                          for="child"
                        >
                          Child
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Parent First Name{" "}
                        <span class="ct_required_star">*</span>
                      </label>
                      <input
                        type="text"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Parent Last Name
                      </label>
                      <input
                        type="text"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Email Address <span class="ct_required_star">*</span>
                      </label>
                      <input
                        type="email"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Contact No.
                      </label>
                      <input
                        type="text"
                        class="ct_input form-control ct_input_40"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Address
                      </label>
                      <textarea
                        class="ct_input form-control ct_input_40 h-auto"
                        rows="4"
                        placeholder="Type here...."
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group text-start mb-4">
                      <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                        Group name
                      </label>
                      <select class="ct_input form-control ct_input_40">
                        <option value="">Group A</option>
                        <option value="">Group B</option>
                        <option value="">Group C</option>
                        <option value="">Group D</option>
                        <option value="">Group E</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
              <div class="d-flex align-items-center gap-3">
                <button
                  type="button"
                  class="ct_purple_btn ct_outline_btn_purple  w-50"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" class="ct_purple_btn   w-50">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
