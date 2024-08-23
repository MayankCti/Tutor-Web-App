import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toggleChange } from "../redux/reducers/authReducer";
import { pageRoutes } from "../routes/pageRoutes";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pathname = useLocation()?.pathname;
  const { isToggle } = useSelector((state) => state.authReducer);

  return (
    <div className="ct_side_bar">
      <div
        className="ct_close_menu"
        onClick={() => dispatch(toggleChange(!isToggle))}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="ct_logo">
        <img src="assets/img/white_logo.svg" alt="" />
      </div>
      <ul className="ct_side_menu">
        <li onClick={() => navigate(pageRoutes.dashboard)}>
          <a
            href="javascript:void(0)"
            className={pathname == pageRoutes?.dashboard ? "active" : ""}
          >
            <img src="assets/img/dashboard_icon.svg" alt="" />
            Dashboard
          </a>
        </li>
        <li onClick={() => navigate(pageRoutes.student)}>
          <a
            href="javascript:void(0)"
            className={pathname == pageRoutes?.student ? "active" : ""}
          >
            <img src="assets/img/student_icon.svg" alt="" />
            Students
          </a>
        </li>
        <li onClick={() => navigate(pageRoutes.classes)}>
          <a
            href="javascript:void(0)"
            className={pathname == pageRoutes?.classes ? "active" : ""}
          >
            <img src="assets/img/classes_icon.svg" alt="" />
            Classes
          </a>
        </li>
        <li onClick={() => navigate(pageRoutes.feeDue)}>
          <a
            href="javascript:void(0)"
            className={pathname == pageRoutes?.feeDue ? "active" : ""}
          >
            <img src="assets/img/fee-due_icon.svg" alt="" />
            Billing
          </a>
        </li>
        {/* <li onClick={() => navigate(pageRoutes.messages)}>
          <a
            href="javascript:void(0)"
            className={pathname == pageRoutes?.messages ? "active" : ""}
          >
            <img src="assets/img/message_icon.svg" alt="" />
            Messages
          </a>
        </li> */}
        <li onClick={() => navigate(pagnpeRoutes.calendar)}>
          <a
            href="javascript:void(0)"
            className={pathname == pageRoutes?.calendar ? "active" : ""}
          >
            <img src="assets/img/calendar_icon.svg" alt="" />
            Calendar
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
