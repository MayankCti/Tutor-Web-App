import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { curSym, pipViewDate } from "../../utils/pip";
import NoRecord from "../../components/other/NoRecord";
import SelectDropdown from "../../components/formInput/SelectDropdown";
import { fetchBilling } from "../../redux/actions/classFeeAction";
import Loader from "../../components/other/Loader";

const Billing = () => {
  const dispatch = useDispatch();
  const [month, setMonth] = useState("");
  const options = [
    { value: "Month", label: "Month" },
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
  ];
  const { isToggle } = useSelector((state) => state.authReducer);
  const { students,isLoading } = useSelector((state) => state?.classFeeReducer);

  useEffect(() => {
    dispatch(fetchBilling());
  }, []);

  if(isLoading){
    return <Loader/>
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
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">Billing</h4>
                  <SelectDropdown
                    id="floatingInputValue"
                    options={options}
                    selectedValue={month}
                    onChange={setMonth}
                  />
                </div>
                <div className="table-responsive">
                  <table className="table ct_custom_table">
                    <thead>
                      <tr>
                        <th> Students Name</th>
                        <th>Email Address</th>
                        <th>Total Due </th>
                        <th>Due Date</th>
                        <th className="text-end">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students?.length <= 0 && <NoRecord />}
                      {students?.map((item) => {
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
                                  {item?.student?.first_name ?? ""}{" "}
                                  {item?.student?.last_name ?? ""}
                                </h5>
                              </div>
                            </td>
                            <td>{item?.student?.email ?? ""}</td>
                            <td>
                              {curSym + " "}
                              {item?.total_due ?? ""}
                            </td>
                            <td>{pipViewDate(item?.due_date) ?? ""}</td>
                            <td className="text-end">
                              <button
                                className={`ct_purple_btn py-1 ct_border_radius_10 ${
                                  item?.payment_status
                                    ? "ct_green_bg"
                                    : "ct_red_bg"
                                }`}
                              >
                                {item?.payment_status ? "Paid" : "Due"}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Billing;
