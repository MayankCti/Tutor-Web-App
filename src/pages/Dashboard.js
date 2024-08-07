import React from "react";
import StudentTable from "../components/StudentTable";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const cardData = [
    {
      backgroundColor: "#D398E7",
      iconSrc: "assets/img/student_icon.svg",
      title: "Total Classes",
      value: "40",
    },
    {
      backgroundColor: "#F0C274",
      iconSrc: "assets/img/user_icon.svg",
      title: "Total Students",
      value: "2514",
    },
    {
      backgroundColor: "#70A1E5",
      iconSrc: "assets/img/anount_icon.svg",
      title: "Time Due Amount",
      value: "$26",
    },
    {
      backgroundColor: "#e570c8",
      iconSrc: "assets/img/total_payment_icon.svg",
      title: "Total Payments",
      value: "$236",
    },
  ];
  const { isLoading } = useSelector((state) => state?.studentReducer);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="ct_inner_dashbaord_main">
      <div className="ct_white_bg ct_mt_28">
        <h3 className="ct_fs_22 ct_ff_roboto mb-4 ct_fw_600 ">Dashboard</h3>
        <div className="row">
          {cardData?.map((card, index) => (
            <div
              key={index}
              className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-4 mb-xxl-0"
            >
              <div className="ct_dashboard_card">
                <div
                  className="ct_dash_card_icon mb-3"
                  style={{ backgroundColor: card?.backgroundColor }}
                >
                  <img src={card?.iconSrc} alt="" />
                </div>
                <div>
                  <p className="ct_fw_600 mb-2">{card?.title}</p>
                  <h2 className="ct_fs_28 ct_fw_600">{card?.value}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ct_px_46">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-3 mt-5">
            <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">New Students</h4>
          </div>
          <StudentTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
