import React, { useEffect, useState } from "react";
import moment from "moment";
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import Logout from "../../components/studentComponent/Logout";
import { pipViewDate } from "../../utils/pip";

function FeesAndDues() {

  const [active, setActive] = useState(true);
  
  const [selectedMonth, setSelectedMonth] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [testing, setTiesting] = useState();
  const sidebarActive = () => {
    setActive(!active);
  };

  const today = Date()
  const feesandDuesData = [
    {
      name : "Alfonso Westervelt",
      streams : "Maths",
      totalDue : 2500,
      dueDate : pipViewDate(today),
      status :  "pay",
    },
    {
      name : "Alfonso Westervelt",
      streams : "Maths",
      totalDue : 2500,
      dueDate : pipViewDate(today),
      status :  "Download Recipt",
    },
    {
      name : "Alfonso Westervelt",
      streams : "Maths",
      totalDue : 2500,
      dueDate : pipViewDate(today),
      status :  "pay",
    },
    {
      name : "Alfonso Westervelt",
      streams : "Maths",
      totalDue : 2500,
      dueDate : pipViewDate(today),
      status :  "pay",
    },
    {
      name : "Alfonso Westervelt",
      streams : "Maths",
      totalDue : 2500,
      dueDate : pipViewDate(today),
      status :  "Download Recipt",
    },
    {
      name : "Alfonso Westervelt",
      streams : "Maths",
      totalDue : 2500,
      dueDate : pipViewDate(today),
      status :  "pay",
    },
    {
      name : "Alfonso Westervelt",
      streams : "Maths",
      totalDue : 2500,
      dueDate : pipViewDate(today),
      status :  "pay",
    },
  ]


  useEffect(() => {
    const filtered = feesandDuesData.filter((item) => {
      if (!selectedMonth) return true;
      console.log("selected month",selectedMonth);
      const itemMonth = moment(item?.dueDate, "DD-MM-YYYY").format("YYYY-MM");
      return itemMonth === selectedMonth;
    });
  
    setFilteredData(filtered);
  }, [selectedMonth]);
  

  const renderStatusButton = (status) => {
    if (status === "pay") {
      return (
        <button className="ct_purple_btn py-1 px-3 ct_border_radius_10 ct_purple_bg ct_ff_roboto">
          Pay
        </button>
      );
    } else {
      return (
        <div className="d-flex align-items-center gap-2 justify-content-end">
          <span className="ct_fs_12 ct_fw_700 ct_green_text_dark">Paid</span>
          <button className="ct_purple_btn py-1 px-3 ct_border_radius_10 ct_outline_btn_purple ct_purple_text ct_fw_700 ct_ff_roboto ct_hover_white_text">
            Download Receipt
          </button>
        </div>
      );
    }
  };

  return (
    <>
     <main className={ active ? "" : "ct_collapsed_sidebar"}>
        <SideBar onToggleSidebar={sidebarActive} />
        <div className="ct_right_content">
          <Header onToggleSidebar={sidebarActive} />

          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg ct_mt_28">
              <div className="ct_px_46">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">
                    Fee &amp; Dues
                  </h4>
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                  <form className="form-floating">
                      <input
                        type="month"
                        className="form-control"
                        id="floatingInputValue"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                      />
                      <label htmlFor="floatingInputValue">Month</label>
                    </form>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table ct_custom_table">
                    <thead>
                      <tr>
                        <th>S. No.</th>
                        <th>Students Name</th>
                        <th>Streams</th>
                        <th>Total Due</th>
                        <th>Due Date</th>
                        <th className="text-end">Status</th>
                      </tr>
                    </thead>
                    <tbody>

                    {filteredData.map((item,index) =>(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="../assets/img/user_profile.png"
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              {item?.name}
                            </h5>
                          </div>
                        </td>
                        <td>{item?.streams}</td>
                        <td>$ {item?.totalDue}</td>
                        <td>{item?.dueDate}</td>
                        <td className="text-end">
                        {renderStatusButton(item?.status)}                          
                        </td>
                      </tr>
                    ))}
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Logout />
    </>
  );
}

export default FeesAndDues;
