import React from "react";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { useSelector } from "react-redux";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Example events list
const myEventsList = [
  {
    title: "Meeting",
    start: new Date(2024, 8, 23, 10, 0), // September 23, 2024, 10:00 AM
    end: new Date(2024, 8, 23, 11, 0), // September 23, 2024, 11:00 AM
  },
  {
    title: "Lunch",
    start: new Date(2024, 8, 24, 12, 0), // September 24, 2024, 12:00 PM
    end: new Date(2024, 8, 24, 13, 0), // September 24, 2024, 1:00 PM
  },
  {
    title: "Conference",
    start: new Date(2024, 8, 25, 9, 0), // September 25, 2024, 9:00 AM
    end: new Date(2024, 8, 25, 17, 0), // September 25, 2024, 5:00 PM
  },
];

const CalendarPage = () => {
  const { isToggle } = useSelector((state) => state.authReducer);
  const localizer = momentLocalizer(moment); // Set the localizer with moment

  return (
    <>
      <main className={isToggle ? "ct_collapsed_sidebar" : ""}>
        <Sidebar />
        <div className="ct_right_content">
          <Headers />
          <div className="ct_inner_dashboard_main">
            <div className="ct_white_bg ct_mt_28">
              <div className="myCustomHeight">
                <Calendar
                  localizer={localizer}
                  events={myEventsList}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }} // Set the height for the calendar
                  defaultView="month" // Default view can be 'month', 'week', 'day'
                  popup // Enable popup for multi-day events
                  selectable // Allow event selection
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CalendarPage;
