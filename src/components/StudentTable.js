import React, { useEffect, useState } from "react";
import NoRecord from "./other/NoRecord";
import { useLocation, useNavigate } from "react-router-dom";
import { pageRoutes } from "../routes/pageRoutes";
import { useDispatch, useSelector } from "react-redux";
import AstrickMark from "./other/AstrickMark";

const StudentTable = ({ statusFilter }) => {
  const navigate = useNavigate();
  const pathname = useLocation()?.pathname;
  const list = useSelector((state) => state?.studentReducer?.students);
  const [students, setStudents] = useState(list);

  useEffect(() => {
    let filtered = [...list]; // Create a copy of the list
    if (statusFilter) {
      filtered = filtered.filter((sub) =>
        statusFilter === "all" ? sub : sub?.student_status === statusFilter
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
            <button
              className="ct_purple_btn py-1 ct_border_radius_10"
              onClick={() => {
                navigate(pageRoutes?.editStudentDetail, {
                  state: {
                    studentDetails: item,
                  },
                });
              }}
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
    </>
  );
};

export default StudentTable;
