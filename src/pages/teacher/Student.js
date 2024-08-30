import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import Loader from "../../components/other/Loader";
import StudentTable from "../../components/StudentTable";
import SelectDropdown from "../../components/formInput/SelectDropdown";
import { fetchStudentList } from "../../redux/actions/studentAction";
import { pageRoutes } from "../../routes/pageRoutes";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("all");
  const { isToggle } = useSelector((state) => state.authReducer);
  const { isLoading, students } = useSelector((state) => state?.studentReducer);
  const options = [
    { value: "all", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
    { value: "Prospective", label: "Prospective" },
  ];
  useEffect(() => {
    dispatch(fetchStudentList());
  }, []);

  const handleButtonClick = () => {
    fileInputRef.current.click();
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
                    <input
                      type="file"
                      id="ct_bulk_upload"
                      ref={fileInputRef}
                      className="d-none"
                    />
                    {/* Button to trigger file input */}
                    <button
                      type="button"
                      className="ct_purple_btn"
                      onClick={handleButtonClick}
                    >
                      <i className="fa-solid fa-arrow-up-from-bracket me-3"></i>{" "}
                      Bulk upload
                    </button>
                    <button
                      class="ct_purple_btn "
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
