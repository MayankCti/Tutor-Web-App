import React, { useEffect, useState } from "react";
import NoRecord from "./other/NoRecord";
import { useLocation } from "react-router-dom";
import { pageRoutes } from "../routes/pageRoutes";
import { useSelector } from "react-redux";
import AstrickMark from "./other/AstrickMark";

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
<<<<<<< Updated upstream
            <button
              className="ct_purple_btn py-1 ct_border_radius_10"
=======
            <i
              class="fa-regular fa-pen-to-square ms-2"
              onClick={() => {
                navigate(pageRoutes?.editStudentDetail, {
                  state: {
                    studentDetails: item,
                  },
                });
              }}
            ></i>
            <i
              class="fa-solid fa-trash trash_icon_color ms-3"
>>>>>>> Stashed changes
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
        class="modal fade "
        id="student_detail"
        tabindex="-1"
        aria-labelledby="student_detailLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content  py-5">
            <div class="modal-body py-0">
              <div>
                <h4 class="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4 text-center">
                  {" "}
                  Edit Student Details
                </h4>
                <form action="">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group text-start mb-4">
                        <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                          First Name <AstrickMark/>
                        </label>
                        <input
                          type="text"
                          class="ct_input form-control ct_input_40"
                          value="Corey"
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
                          value="Ebert"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group text-start mb-4">
                        <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                          Email Address <AstrickMark/>
                        </label>
                        <input
                          type="email"
                          class="ct_input form-control ct_input_40"
                          value="coreyebert@domainname.com"
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
                          value="(555) 345-6789"
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
                          value="(256) 024-8534"
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
                              backgroundColor: "rgb(124 210 114 / 40%)",
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
                              backgroundColor: "rgb(35 171 185 / 40%)",
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
                              backgroundColor: "rgb(170 98 68 / 40%)",
                              color: "#AA624",
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
                              backgroundColor: "rgb(125 68 170 / 40%)",
                              color: "#7D44A",
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
                              backgroundColor: "rgb(118 118 118 / 40%)",
                              color: "#76767",
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
                          value="05-08-2004"
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
                          value="Grade 12"
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
                          value="School Name 1"
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
                          <AstrickMark/>
                        </label>
                        <input
                          type="text"
                          class="ct_input form-control ct_input_40"
                          value="Christopher"
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
                          value="Nolan"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group text-start mb-4">
                        <label for="" class="ct_ff_roboto mb-2 ct_fw_500">
                          Email Address <AstrickMark/>
                        </label>
                        <input
                          type="email"
                          class="ct_input form-control ct_input_40"
                          value="nolan@domainname.com"
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
                          value="(236) 825-4177"
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
                        >
                          221 B baker street London
                        </textarea>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentTable;
