import React, { useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import MonthInput from "../../components/MonthInput";
import { curSym, pipViewDate } from "../../utils/pip";
import NoRecord from "../../components/other/NoRecord";

const FeeDue = () => {
  const [month, setMonth] = useState("");
  const { isToggle } = useSelector((state) => state.authReducer);
  const { students } = useSelector((state) => state?.classFeeReducer);
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
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">
                    Fee & Dues
                  </h4>
                  <MonthInput
                    id="monthInput"
                    label="Month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
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
                                  {item?.name ?? ""}
                                </h5>
                              </div>
                            </td>
                            <td>{item?.email ?? ""}</td>
                            <td>
                              {curSym + " "}
                              {item?.totalDue ?? ""}
                            </td>
                            <td>{pipViewDate(item?.dueDate) ?? ""}</td>
                            <td className="text-end">
                              <button
                                className={`ct_purple_btn py-1 ct_border_radius_10 ${
                                  item?.status == "Due"
                                    ? "ct_red_bg"
                                    : "ct_green_bg"
                                }`}
                              >
                                {item?.status}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {/* <div className="table-responsive">
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
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                    </td>
                    <td>Zoey.Boyle@gmail.com</td>
                    <td>$ 2500</td>
                    <td>12-09-2024</td>
                    <td className="text-end">
                      <button className="ct_purple_btn py-1 ct_border_radius_10 ct_red_bg">
                        Due
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                    </td>
                    <td>Zoey.Boyle@gmail.com</td>
                    <td>$ 2500</td>
                    <td>12-09-2024</td>
                    <td className="text-end">
                      <button className="ct_purple_btn py-1 ct_border_radius_10 ct_red_bg">
                        Due
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                    </td>
                    <td>Zoey.Boyle@gmail.com</td>
                    <td>$ 2500</td>
                    <td>12-09-2024</td>
                    <td className="text-end">
                      <button className="ct_purple_btn py-1 ct_border_radius_10 ct_red_bg">
                        Due
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                    </td>
                    <td>Zoey.Boyle@gmail.com</td>
                    <td>$ 2500</td>
                    <td>12-09-2024</td>
                    <td className="text-end">
                      <button className="ct_purple_btn py-1 ct_border_radius_10 ct_red_bg">
                        Due
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                    </td>
                    <td>Zoey.Boyle@gmail.com</td>
                    <td>$ 2500</td>
                    <td>12-09-2024</td>
                    <td className="text-end">
                      <button className="ct_purple_btn py-1 ct_border_radius_10 ct_red_bg">
                        Due
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                    </td>
                    <td>Zoey.Boyle@gmail.com</td>
                    <td>$ 2500</td>
                    <td>12-09-2024</td>
                    <td className="text-end">
                      <button className="ct_purple_btn py-1 ct_border_radius_10 ct_green_bg">
                        Paid
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                    </td>
                    <td>Zoey.Boyle@gmail.com</td>
                    <td>$ 2500</td>
                    <td>12-09-2024</td>
                    <td className="text-end">
                      <button className="ct_purple_btn py-1 ct_border_radius_10 ct_green_bg">
                        Paid
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                    </td>
                    <td>Zoey.Boyle@gmail.com</td>
                    <td>$ 2500</td>
                    <td>12-09-2024</td>
                    <td className="text-end">
                      <button className="ct_purple_btn py-1 ct_border_radius_10 ct_green_bg">
                        Paid
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                    </td>
                    <td>Zoey.Boyle@gmail.com</td>
                    <td>$ 2500</td>
                    <td>12-09-2024</td>
                    <td className="text-end">
                      <button className="ct_purple_btn py-1 ct_border_radius_10 ct_green_bg">
                        Paid
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/img/user_profile.png"
                          alt=""
                          className="ct_img_36"
                        />
                        <h5 className="ct_fs_14 ct_fw_600 mb-0">
                          Alfonso Westervelt
                        </h5>
                      </div>
                    </td>
                    <td>Zoey.Boyle@gmail.com</td>
                    <td>$ 2500</td>
                    <td>12-09-2024</td>
                    <td className="text-end">
                      <button className="ct_purple_btn py-1 ct_border_radius_10 ct_green_bg">
                        Paid
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FeeDue;
