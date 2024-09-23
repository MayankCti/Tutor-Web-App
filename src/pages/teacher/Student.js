import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import Loader from "../../components/other/Loader";
import StudentTable from "../../components/StudentTable";
import SelectDropdown from "../../components/formInput/SelectDropdown";
import {
  fetchStudentList,
  uploadStudentFile,
} from "../../redux/actions/studentAction";
import { pageRoutes } from "../../routes/pageRoutes";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const demoCSVFileObj = [
    {
      first_name: null,
      last_name: null,
      email: null,
      contact_number: null,
      emergency_contact_number: null,
      student_status: null,
      address: null,
      city: null,
      date_of_birth: null,
      grade: null,
      subject: null,
      school_name: null,
    },
  ];
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("all");
  const { isToggle } = useSelector((state) => state.authReducer);
  const { isLoading, students, options } = useSelector(
    (state) => state?.studentReducer
  );
  useEffect(() => {
    dispatch(fetchStudentList());
  }, []);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const convertArrayToCSV = (arr) => {
    if (arr?.length != 0) {
      const headers = Object.keys(arr[0]);
      const rows = arr.map((obj) =>
        headers.map((header) => obj[header]).join(",")
      );
      return [headers.join(","), ...rows].join("\n");
    }
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
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">All Students</h4>
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    <div>
                      <SelectDropdown
                        id="floatingInputValue"
                        options={options}
                        selectedValue={statusFilter}
                        onChange={setStatusFilter}
                      />
                    </div>
                    <input
                      type="file"
                      id="ct_bulk_upload"
                      ref={fileInputRef}
                      className="d-none"
                      onChange={(e) => {
                        const data = new FormData();
                        data?.append("file", e.target.files[0]);
                        const callback = (response) => {
                          if (response.success) {
                            fileInputRef.current.value = null;
                            dispatch(fetchStudentList());
                          }
                        };
                        dispatch(
                          uploadStudentFile({ payload: data, callback })
                        );
                      }}
                    />

                    {/* Button to trigger file input */}
                    <button
                      type="button"
                      className="ct_purple_btn"
                      onClick={handleButtonClick}
                    >
                      <i className="fa-solid fa-arrow-up-from-bracket me-1"></i>{" "}
                      Bulk upload
                    </button>
                    <button
                      className="ct_purple_btn "
                      title="Download demo csv file for reference"
                      onClick={() => {
                        const csv = convertArrayToCSV(demoCSVFileObj);
                        const blob = new Blob([csv], { type: "text/csv" });
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement("a");
                        link.href = url;
                        link.setAttribute("download", `Demo Csv File`);
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <i className="fa-solid fa-download me-1"></i> Demo CSV
                    </button>
                    <button
                      className="ct_purple_btn "
                      onClick={() => navigate(pageRoutes?.createStudent)}
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
    </>
  );
};

export default Student;
