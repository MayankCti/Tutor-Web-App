import React from "react";

const Calendar = () => {
  return (
    <>
      <div class="ct_inner_dashbaord_main">
        <div class="ct_white_bg ct_mt_28">
          <div class="px-3">
            <div class="mb-5 pt-4">
              <h4 class="ct_fs_22 ct_ff_roboto ct_fw_600 mx-auto mb-0">
                Calendar
              </h4>
            </div>

            <div class="row">
              <div class="col-xl-3 mb-4">
                <div class="ct_current_calendar-container">
                  <div class="ct_current_calendar-month-arrow-container">
                    <div class="ct_currentcalendar-month-year-container">
                      <select class="ct_current_calendar-years"></select>
                      <select class="ct_current_calendar-months"></select>
                    </div>
                    <div class="calendar-month-year"></div>
                    <div class="calendar-arrow-container">
                      <button class="calendar-today-button"></button>
                    </div>
                  </div>
                  <ul class="calendar-week "></ul>
                  <ul class="calendar-days"></ul>
                </div>

                <div class="ct_event_detail_list mt-4">
                  <div class="d-flex align-items-center gap-3">
                    <img
                      src="assets/img/calendar_img_12.png"
                      alt=""
                      class="ct_img_18"
                    />
                    <h4 class="ct_ff_roboto ct_fw_600 ct_fs_16 mb-0">
                      02-01-2024
                    </h4>
                  </div>
                  <ul class="mt-4">
                    <li>
                      <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_green_text_dark ct_fw_600">
                        <span class="ct_event_dot ct_dot_clr"></span>Groups
                      </p>
                      <p class="mb-0 ct_fs_14 ct_fw_600">08:00</p>
                    </li>
                    <li>
                      <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_red_text ct_fw_600">
                        <span class="ct_event_dot ct_red_bg"></span>1:1 sessions
                      </p>
                      <p class="mb-0 ct_fs_14 ct_fw_600">09:00</p>
                    </li>
                    <li>
                      <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_yellow_text">
                        <span class="ct_event_dot ct_yellow_bg"></span>School
                        Readiness
                      </p>
                      <p class="mb-0 ct_fs_14 ct_fw_600">10:00</p>
                    </li>
                    <li>
                      <p
                        class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1"
                        style={{ color: "#55D28F" }}
                      >
                        <span
                          class="ct_event_dot ct_dot_clr"
                          style={{ backgroundColor: "#55D28F" }}
                        ></span>
                        Homework Clubs
                      </p>
                      <p class="mb-0 ct_fs_14 ct_fw_600">11:00</p>
                    </li>
                    <li>
                      <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_red_text ct_fw_600">
                        <span class="ct_event_dot ct_red_bg"></span>1:1 sessions
                      </p>
                      <p class="mb-0 ct_fs_14 ct_fw_600">09:00</p>
                    </li>
                  </ul>
                </div>
                <div class="ct_event_detail_list mt-5">
                  <div class="d-flex align-items-center gap-3">
                    <img
                      src="assets/img/calendar_img_12.png"
                      alt=""
                      class="ct_img_18"
                    />
                    <h4 class="ct_ff_roboto ct_fw_600 ct_fs_16 mb-0">
                      03-01-2024
                    </h4>
                  </div>
                  <ul class="mt-4">
                    <li>
                      <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_green_text_dark ct_fw_600">
                        <span class="ct_event_dot ct_dot_clr"></span>Groups
                      </p>
                      <p class="mb-0 ct_fs_14 ct_fw_600">13:00</p>
                    </li>
                    <li>
                      <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_red_text ct_fw_600">
                        <span class="ct_event_dot ct_red_bg"></span>1:1 sessions
                      </p>
                      <p class="mb-0 ct_fs_14 ct_fw_600">14:00</p>
                    </li>
                    <li>
                      <p class="mb-0 ct_fs_14 ct_fw_600 d-flex align-items-center gap-1 ct_yellow_text">
                        <span class="ct_event_dot ct_yellow_bg"></span>School
                        Readiness
                      </p>
                      <p class="mb-0 ct_fs_14 ct_fw_600">15:00</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-9 mb-4">
                <div id="ec"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
