import React from "react";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { useSelector } from "react-redux";

const Calendar = () => {
  const { isToggle } = useSelector((state) => state.authReducer);
  return (
    <>
      <main className={isToggle ? "ct_collapsed_sidebar" : ""}>
        <Sidebar />
        <div className="ct_right_content">
          <Headers />
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg ct_mt_28">
          <div className="px-3">
            <div className="mb-5 pt-4">
              <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600 mx-auto mb-0">
                Calendar
              </h4>
            </div>
            <div className="row">
              <div className="col-xl-3 mb-4">
                <div className="ct_current_calendar-container">
                  <div className="ct_current_calendar-month-arrow-container">
                    <div className="ct_currentcalendar-month-year-container">
                      <select className="ct_current_calendar-years"></select>
                      <select className="ct_current_calendar-months"></select>
                    </div>
                    <div className="calendar-month-year"></div>
                    <div className="calendar-arrow-container">
                      <button className="calendar-today-button"></button>
                    </div>
                  </div>
                  <ul className="calendar-week "></ul>
                  <ul className="calendar-days"></ul>
                </div>

                <div className="ct_event_detail_list mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/img/calendar_img_12.png"
                      alt=""
                      className="ct_img_18"
                    />
                    <h4 className="ct_ff_roboto ct_fw_600 ct_fs_16 mb-0">
                      02-01-2024
                    </h4>
                  </div>
                  <ul className="mt-4">
                    <li>
                      <p className="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_green_text_dark ct_fw_600">
                        <span className="ct_event_dot ct_dot_clr"></span>Groups
                      </p>
                      <p className="mb-0 ct_fs_14 ct_fw_600">08:00</p>
                    </li>
                    <li>
                      <p className="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_red_text ct_fw_600">
                        <span className="ct_event_dot ct_red_bg"></span>1:1 sessions
                      </p>
                      <p className="mb-0 ct_fs_14 ct_fw_600">09:00</p>
                    </li>
                    <li>
                      <p className="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_yellow_text">
                        <span className="ct_event_dot ct_yellow_bg"></span>School
                        Readiness
                      </p>
                      <p className="mb-0 ct_fs_14 ct_fw_600">10:00</p>
                    </li>
                    <li>
                      <p
                        className="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1"
                        style={{ color: "#55D28F" }}
                      >
                        <span
                          className="ct_event_dot ct_dot_clr"
                          style={{ backgroundColor: "#55D28F" }}
                        ></span>
                        Homework Clubs
                      </p>
                      <p className="mb-0 ct_fs_14 ct_fw_600">11:00</p>
                    </li>
                    <li>
                      <p className="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_red_text ct_fw_600">
                        <span className="ct_event_dot ct_red_bg"></span>1:1 sessions
                      </p>
                      <p className="mb-0 ct_fs_14 ct_fw_600">09:00</p>
                    </li>
                  </ul>
                </div>
                <div className="ct_event_detail_list mt-5">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="assets/img/calendar_img_12.png"
                      alt=""
                      className="ct_img_18"
                    />
                    <h4 className="ct_ff_roboto ct_fw_600 ct_fs_16 mb-0">
                      03-01-2024
                    </h4>
                  </div>
                  <ul className="mt-4">
                    <li>
                      <p className="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_green_text_dark ct_fw_600">
                        <span className="ct_event_dot ct_dot_clr"></span>Groups
                      </p>
                      <p className="mb-0 ct_fs_14 ct_fw_600">13:00</p>
                    </li>
                    <li>
                      <p className="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_red_text ct_fw_600">
                        <span className="ct_event_dot ct_red_bg"></span>1:1 sessions
                      </p>
                      <p className="mb-0 ct_fs_14 ct_fw_600">14:00</p>
                    </li>
                    <li>
                      <p className="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_yellow_text">
                        <span className="ct_event_dot ct_yellow_bg"></span>School
                        Readiness
                      </p>
                      <p className="mb-0 ct_fs_14 ct_fw_600">15:00</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-9 mb-4">
                <div id="ec"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </main>
    </>
  );
};

export default Calendar;
