import React, { useEffect, useState } from "react";
import NoRecord from "./other/NoRecord";
import { useLocation } from "react-router-dom";
import { pageRoutes } from "../routes/pageRoutes";
import { useSelector } from "react-redux";

const StudentTable = ({ statusFilter }) => {
  const pathname = useLocation()?.pathname;
  const list = useSelector((state) => state?.studentReducer?.students);
  const [students, setStudents] = useState(list);

  useEffect(() => {
    let filtered = [...list]; // Create a copy of the list
    if (statusFilter) {
      filtered = filtered.filter((sub) =>
        statusFilter === "all" ? sub : sub?.status === statusFilter
      );
    }
    setStudents(filtered);
  }, [statusFilter, list]);

  const tableBody = () => {
    return students?.map((item) => {
      return (
        <tr key={item.name}>
          <td>
            <div className="d-flex align-items-center gap-2">
              <img
                src="assets/img/user_profile.png"
                alt=""
                className="ct_img_36"
              />
              <h5 className="ct_fs_14 ct_fw_600 mb-0">{item?.name ?? ""}</h5>
            </div>
          </td>
          <td>{item?.email ?? ""}</td>
          <td>{item?.contactNo ?? ""}</td>
          <td>{item?.city ?? ""}</td>
          <td>{item?.status}</td>
          <td className="text-end">
            <button
              className="ct_purple_btn py-1 ct_border_radius_10"
              data-bs-toggle="modal"
              data-bs-target="#student_detail"
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <div className="table-responsive">
        <table className="table ct_custom_table">
          <thead>
            <tr>
              <th> Students Name</th>
              <th>Email Address</th>
              <th>Contact No.</th>
              <th>City</th>
              <th>Status</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {students?.length <= 0 && <NoRecord />}
            {pathname === pageRoutes?.dashboard
              ? tableBody()?.slice(0, 5)
              : tableBody()}
          </tbody>
        </table>
      </div>

      {/* Student edit model */}
      <div
        class="modal fade"
        id="student_detail"
        tabindex="-1"
        aria-labelledby="student_detailLabel"
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
                    value="Corey Ebert"
                  />
                </div>
                <div class="form-group text-start mb-4">
                  <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                    Email Address <span class="ct_required_star">*</span>
                  </label>
                  <input
                    type="email"
                    class="ct_input form-control ct_input_40"
                    value="coreyebert@domainname.com"
                  />
                </div>
                <div class="form-group text-start mb-4">
                  <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                    Contact No.
                  </label>
                  <input
                    type="number"
                    class="ct_input form-control ct_input_40"
                    value="(555) 345-6789"
                  />
                </div>
                <div class="form-group text-start mb-4">
                  <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                    City
                  </label>
                  <input
                    type="text"
                    class="ct_input form-control ct_input_40"
                    value="New Youk"
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
                  Add Student
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentTable;
