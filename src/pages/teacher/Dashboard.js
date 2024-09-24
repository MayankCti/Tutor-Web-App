import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/other/Loader";
import StudentTable from "../../components/StudentTable";
import { fetchProfile } from "../../redux/actions/authAction";
import { pageRoutes } from "../../routes/pageRoutes";
import { handleCurrentStep } from "../../redux/reducers/authReducer";
import {
  fetchDashboard,
  fetchStudentList,
} from "../../redux/actions/studentAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isToggle, isLoading } = useSelector((state) => state.authReducer);
  const { cardData } = useSelector((state) => state?.studentReducer);
  const route = [
    { path: pageRoutes?.classes },
    { path: pageRoutes?.student },
    { path: pageRoutes?.feeDue },
    { path: pageRoutes?.feeDue },
  ];
  useEffect(() => {
    dispatch(fetchStudentList());
    dispatch(fetchDashboard());
  }, []);
  useEffect(() => {
    dispatch(fetchProfile()).then((profile) => {
      const formStatus = profile?.payload?.data?.form_completed;
      console.log({ formStatus });
      if (formStatus < 4) {
        dispatch(handleCurrentStep(formStatus));
        navigate(pageRoutes?.stepForm);
      }
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <main className={isToggle ? "ct_collapsed_sidebar" : ""}>
      <Sidebar />
      <div className="ct_right_content">
        <Headers />
        <div className="ct_inner_dashbaord_main">
          <div className="ct_white_bg ct_mt_28">
            <h3 className="ct_fs_22 ct_ff_roboto mb-4 ct_fw_600 ">Dashboard</h3>
            <div className="row">
              {cardData?.map((card, index) => (
                <div
                  key={index}
                  className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-4 mb-xxl-0 ct_pointer_curser"
                  onClick={() => navigate(route[index]?.path)}
                >
                  <div className="ct_dashboard_card">
                    <div
                      className="ct_dash_card_icon mb-3"
                      style={{ backgroundColor: card?.backgroundColor }}
                    >
                      <img src={card?.iconSrc} alt="" />
                    </div>
                    <div>
                      <p className="ct_fw_600 mb-2 ct_purple_text">
                        {card?.title ?? ""}
                      </p>
                      <h2 className="ct_fs_28 ct_fw_600">
                        {card?.value ?? ""}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ct_px_46">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3 mt-5">
                <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">
                  New Students
                </h4>
              </div>
              <StudentTable />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
