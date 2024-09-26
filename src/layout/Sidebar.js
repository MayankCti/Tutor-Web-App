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

  const menuItems = [
    {
      route: pageRoutes.dashboard,
      icon: "dashboard_icon.svg",
      label: "Dashboard",
    },
    { route: pageRoutes.student, icon: "student_icon.svg", label: "Students" },
    { route: pageRoutes.classes, icon: "classes_icon.svg", label: "Classes" },
    { route: pageRoutes.billing, icon: "fee-due_icon.svg", label: "Billing" },
    { route: pageRoutes.messages, icon: "message_icon.svg", label: "Messages" },
    {
      route: pageRoutes.calendar,
      icon: "calendar_icon.svg",
      label: "Calendar",
    },
    { route: pageRoutes.setting, icon: "gear-solid.svg", label: "Settings" },
  ];

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
        {menuItems?.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              if (item?.label === "Messages") {
                return (window.location.href = item?.route);
              }
              navigate(item?.route);
            }}
          >
            <a
              href="javascript:void(0)"
              className={pathname === item?.route ? "active" : ""}
            >
              <img src={`assets/img/${item?.icon}`} alt={item?.label} />
              {item?.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
