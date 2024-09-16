import React from "react";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../routes/pageRoutes";
import Logout from "../../components/studentComponent/Logout";

function Header({ onToggleSidebar }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="ct_right_header">
        <div className="ct_right_header_left">
          <div className="ct_toggle_bar" onClick={onToggleSidebar}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="ct_right_header_right">
          <div className="ct_user_profile_head">
            <a
              href="javascript:void(0)"
              onClick={() => navigate(pageRoutes?.studentProfile)}
            >
              <img
                src="../assets/img/user_profile.png"
                alt=""
                className="ct_img_44"
              />
              <div>
                <h6 className="ct_fs_14 ct_fw_700 mb-0 ct_ff_roboto mb-1">
                  Aris Lomen
                </h6>
                <p className="mb-0 ct_fs_12 ct_fw_500 ct_ff_roboto ">Student</p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#ct_logout_modal"
            >
              <img src="../assets/img/logout_icon.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <Logout />
    </>
  );
}

export default Header;
