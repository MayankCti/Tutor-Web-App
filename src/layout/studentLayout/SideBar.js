import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pageRoutes } from "../../routes/pageRoutes";

function SideBar({ onToggleSidebar }) {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const isActive = (path) => pathname === path;

  const sidebarList = [
    {
      path: pageRoutes?.studentmyClass,
      images: "../assets/img/classes_icon.svg",
      label: "My Classes",
    },
    {
      path: pageRoutes?.studentfeesAndDues,
      images: "../assets/img/fee-due_icon.svg",
      label: "Billing",
    },
    {
      path: pageRoutes?.studentmessages,
      images: "../assets/img/message_icon.svg",
      label: "Messages",
    },
  ];

  return (
    <>
      <div className="ct_side_bar">
        <div className="ct_close_menu">
          <i className="fa-solid fa-xmark" style={{ cursor: "pointer" }} onClick={onToggleSidebar}></i>
        </div>
        <div className="ct_logo">
          <img src="../assets/img/white_logo.svg" alt="Logo" />
        </div>
        <ul className="ct_side_menu">
          {sidebarList?.map((item, index) => (
            <li key={index}>
              <a
                href="javascript:void(0)"
                className={isActive(item.path) ? "active" : ""}
                onClick={() => navigate(item.path)}
              >
                <img src={item.images} alt={item.label} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideBar;
