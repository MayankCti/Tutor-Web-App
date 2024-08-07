import React, { useState } from "react";
import StudentTable from "../components/StudentTable";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

const Student = () => {
  const { isLoading, students } = useSelector((state) => state?.studentReducer);
  const [statusFilter, setStatusFilter] = useState("all");
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg ct_mt_28">
          <div className="ct_px_46">
            <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
              <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">
                All Students {students?.length}
              </h4>
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <form className="form-floating">
                  <select
                    onChange={(e) => setStatusFilter(e.target?.value)}
                    value={statusFilter}
                    className="form-control"
                    id="floatingInputValue"
                  >
                    <option value="all">All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Prospective">Prospective</option>
                  </select>
                  <label for="floatingInputValue">Status</label>
                </form>
                <button
                  className="ct_purple_btn ct_extra_dark_btn_bg"
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

      {/*Add Student modal  */}
      <div
        class="modal fade"
        id="add_student"
        tabindex="-1"
        aria-labelledby="add_studentLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content  py-5">
            <div class="modal-body py-0">
              <div>
                <h4 class="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4 text-center">
                  Student Details
                </h4>

                <div class="form-group text-start mb-4">
                  <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                    Student Name
                  </label>
                  <input
                    type="text"
                    class="ct_input form-control ct_input_40"
                  />
                </div>
                <div class="form-group text-start mb-4">
                  <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                    Email Address <span class="ct_required_star">*</span>
                  </label>
                  <input
                    type="email"
                    class="ct_input form-control ct_input_40"
                  />
                </div>
                <div class="form-group text-start mb-4">
                  <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                    Contact No.
                  </label>
                  <input
                    type="number"
                    class="ct_input form-control ct_input_40"
                  />
                </div>
                <div class="form-group text-start mb-4">
                  <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                    City
                  </label>
                  <input
                    type="text"
                    class="ct_input form-control ct_input_40"
                  />
                </div>
                <div class="form-group text-start mb-4">
                  <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                    Enrolling service for
                  </label>
                  <select class="ct_input form-control ct_input_40">
                    <option value="">1:1 sessions</option>
                    <option value="">1:2 sessions</option>
                    <option value="">1:3 sessions</option>
                    <option value="">1:4 sessions</option>
                  </select>
                </div>
              </div>
              <div class="d-flex align-items-center gap-3">
                <button
                  type="button"
                  class="ct_purple_btn ct_outline_btn_purple ct_extra_dark_btn_bg w-50"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="ct_purple_btn ct_extra_dark_btn_bg  w-50"
                >
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
