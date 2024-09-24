import React, { useEffect, useState } from "react";
import NoRecord from "./other/NoRecord";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pageRoutes } from "../routes/pageRoutes";
import {
  deleteStudent,
  fetchStudentList,
} from "../redux/actions/studentAction";
import { setUserDetails } from "../redux/reducers/studentReducer";

const StudentTable = ({ statusFilter }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathname = useLocation()?.pathname;
  const [studentId, setStudentId] = useState();
  const list = useSelector((state) => state?.studentReducer?.students);
  const { studentDetail } = useSelector((state) => state?.studentReducer);
  const [students, setStudents] = useState(list);
  const [isStudentModal, setIsStudentModal] = useState(false);

  useEffect(() => {
    let filtered = [...list]; // Create a copy of the list
    if (statusFilter) {
      filtered = filtered.filter((sub) =>
        statusFilter === "all" ? sub : sub?.student_status === statusFilter
      );
    }
    setStudents(filtered);
  }, [statusFilter, list]);

  // delete faq
  const handleDeleteStudent = () => {
    const callback = (response) => {
      if (response.success) {
        setStudentId("");
        dispatch(fetchStudentList());
      }
    };
    dispatch(
      deleteStudent({
        payload: {
          student_id: studentId,
        },
        callback,
      })
    );
  };

  const handleModalClick = (item) => {
    dispatch(setUserDetails(item));
    setIsStudentModal(true);
  };

  const tableBody = () => {
    return students?.map((item, index) => {
      return (
        <tr key={item.name}>
          <td>{index + 1}</td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <img
                src="assets/img/user_profile.png"
                alt=""
                className="ct_img_36"
              />
              <h5 className="ct_fs_14 ct_fw_600 mb-0">
                {item?.first_name ?? ""} {item?.last_name ?? ""}
              </h5>
            </div>
          </td>
          <td>{item?.email ?? ""}</td>
          <td>{item?.contact_number ?? ""}</td>
          <td>{item?.city ?? ""}</td>
          <td>{item?.student_status}</td>
          <td className="text-end">
            <i
              className="fa-solid fa-eye ct_show_modal_dtl cursorPointer"
              onClick={() => handleModalClick(item)}
            ></i>
            <i
              className="fa-regular fa-pen-to-square ms-2 cursorPointer"
              onClick={() => {
                navigate(pageRoutes?.editStudentDetail, {
                  state: {
                    studentDetails: item,
                  },
                });
              }}
            ></i>
            <i
              className="fa-solid fa-trash trash_icon_color ms-2 cursorPointer"
              data-bs-toggle="modal"
              data-bs-target="#ct_confirmation_modal"
              onClick={() => setStudentId(item?.id)}
            ></i>
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
              <th>S.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact No.</th>
              <th>City</th>
              <th>Status</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {pathname === pageRoutes?.dashboard
              ? tableBody()?.slice(0, 5)
              : tableBody()}
          </tbody>
        </table>
        {students?.length <= 0 && <NoRecord />}
      </div>

      {/* DELETE STUDENT CONFIRMATION */}
      <div
        className="modal fade ct_assets_modal"
        id="ct_confirmation_modal"
        tabIndex="-1"
        aria-labelledby="ct_logout_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0 pt-0">
              <button
                type="button"
                className="btn-close ct_cloose_btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body border-0 ">
              <h4 className="text-center mb-4 ct_fw_600">Delete Student</h4>
              <p className="text-center ct_grey_text">
                Are you sure, you want to delete this Student?
              </p>
              <div className="modal-footer border-0 justify-content-center">
                <button
                  type="button"
                  className="ct_purple_btn ct_outline_blue"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <a
                  onClick={handleDeleteStudent}
                  href="javascript:void(0)"
                  type="button"
                  data-bs-dismiss="modal"
                  className="bg-danger ct_purple_btn justify-content-center"
                  style={{ borderColor: "rgb(220, 53, 69)" }}
                >
                  Delete
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class={`modal fade ct_view_student ${isStudentModal ? "show" : ""}`}
        id="ct_view_student"
        tabIndex="-1"
        aria-labelledby="ct_logout_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0 pt-0">
              <button
                type="button"
                className="btn-close ct_cloose_btn"
                onClick={() => setIsStudentModal(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body border-0 ">
              <h4 className="text-center mb-5 ct_fw_700">Student Details</h4>

              <div>
                {/* Remove after preview uncomment */}
                <div className="position-relative">
                  <div className="ct_user_profile_img121">
                    <img
                      src={
                        studentDetail?.profile_image ??
                        "./assets/img/user_profile.png"
                      }
                      alt=""
                    />
                  </div>
                </div>

                {/* <ImagePreview userDetail={userDetail} /> */}

                <div className="ct_assets_info mt-4">
                  {console.log({ studentDetail })}
                  <div className="row">
                    <div className="col-md-11 mx-auto">
                      <div className="row ">
                        <p className="col-md-6">
                          <strong>Full Name</strong>
                        </p>
                        <p className="col-md-6">{`${studentDetail?.first_name} ${studentDetail?.last_name}`}</p>
                      </div>

                      <div className="row">
                        <p className="col-md-6">
                          <strong>Email</strong>
                        </p>
                        <p className="col-md-6">{studentDetail?.email}</p>
                      </div>
                      <div className="row">
                        <p className="col-md-6">
                          <strong>Contact No.</strong>
                        </p>
                        <p className="col-md-6">
                          {studentDetail?.contact_number}
                        </p>
                      </div>
                      <div className="row">
                        <p className="col-md-6">
                          <strong>Emergency Contact No.</strong>
                        </p>
                        <p className="col-md-6">
                          {studentDetail?.emergency_contact_number}
                        </p>
                      </div>
                      <div className="row">
                        <p className="col-md-6">
                          <strong>Student Status</strong>
                        </p>

                        <p className="col-md-6 ct_green_text">Active</p>
                        {/* <p className="col-md-6 ct_grey_text">Inactive</p> */}
                      </div>
                      <div className="row">
                        <p className="col-md-6">
                          <strong>Address</strong>
                        </p>
                        <p className="col-md-6">{studentDetail?.address} </p>
                      </div>
                      <div className="row">
                        <p className="col-md-6">
                          <strong>DOB</strong>
                        </p>
                        <p className="col-md-6">
                          {studentDetail?.date_of_birth}{" "}
                        </p>
                      </div>
                      <div className="row">
                        <p className="col-md-6">
                          <strong>Grade</strong>
                        </p>
                        <p className="col-md-6">{studentDetail?.grade} </p>
                      </div>
                      <div className="row">
                        <p className="col-md-6">
                          <strong>School Name</strong>
                        </p>
                        <p className="col-md-6">
                          {studentDetail?.school_name}{" "}
                        </p>
                      </div>
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

export default StudentTable;
