import Sidebar from "../../../layout/Sidebar";
import Headers from "../../../layout/Headers";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "../../../components/other/Loader";
import { useDispatch, useSelector } from "react-redux";
import { pageRoutes } from "../../../routes/pageRoutes";
import {
  deleteClassType,
  fetchClassesTypes,
} from "../../../redux/actions/classFeeAction";
import NoRecord from "../../../components/other/NoRecord";

const Setting = () => {
  const [classId, setClassId] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isToggle } = useSelector((state) => state.authReducer);
  const { classTypes, isLoading } = useSelector(
    (state) => state.classFeeReducer
  );
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    dispatch(fetchClassesTypes());
  }, []);

  // delete faq
  const handleDeleteClassType = () => {
    const callback = (response) => {
      if (response.success) {
        setClassId("");
        dispatch(fetchClassesTypes());
      }
    };
    dispatch(
      deleteClassType({
        payload: {
          class_type_id: classId,
        },
        callback,
      })
    );
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
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">Settings</h4>
                  <button
                    className="ct_purple_btn"
                    type="button"
                    onClick={() => navigate(pageRoutes?.createClassType)}
                  >
                    + Add Class Type{" "}
                  </button>
                </div>

                <div className="table-responsive">
                  <table className="table ct_custom_table">
                    <thead>
                      <tr>
                        <th>Class Type</th>
                        <th>Student Count</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classTypes?.length != 0 && (
                        classTypes?.map((classType) => {
                          return (
                            <tr>
                              <td>{classType?.class_type_name}</td>
                              <td>
                                <div className="d-flex align-items-center gap-2">
                                  {classType?.student_count}
                                </div>
                              </td>
                              <td className="text-end">
                                <i
                                  className="fa-regular fa-pen-to-square ms-2 cursorPointer"
                                  onClick={() => {
                                    navigate(pageRoutes?.updateClassType, {
                                      state: {
                                        class_type_name:
                                          classType?.class_type_name,
                                        student_count: classType?.student_count,
                                      },
                                    });
                                  }}
                                ></i>
                                {/* <i
                                  onClick={() => setClassId(classType?.id)}
                                  className="fa-solid fa-trash trash_icon_color ms-3"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ct_confirmation_modal"
                                ></i> */}
                              </td>
                            </tr>
                          );
                        })
                      ) 
                    }
                    </tbody>
                  </table>
                      {classTypes?.length <= 0 && <NoRecord />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
              <h4 className="text-center mb-4 ct_fw_600">Delete Class Type</h4>
              <p className="text-center ct_grey_text">
                Are you sure, you want to delete this Class Type?
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
                  href="javascript:void(0)"
                  type="button"
                  data-bs-dismiss="modal"
                  className="bg-danger ct_purple_btn justify-content-center"
                  style={{ borderColor: "rgb(220, 53, 69)" }}
                  // onClick={handleDeleteClassType}
                >
                  Delete
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
