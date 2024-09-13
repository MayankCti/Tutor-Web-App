// DateCalender.js
import React, { useState, useEffect } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateCalender = ({
  initialStartDate = new Date(),
  initialEndDate = addDays(new Date(), 7),
  onDateChange,
}) => {
  const [state, setState] = useState([
    { startDate: initialStartDate, endDate: initialEndDate, key: "selection" },
  ]);

  useEffect(() => onDateChange?.(state[0]), [state, onDateChange]);

  return (
<<<<<<< Updated upstream
    <DateRangePicker
      onChange={(item) => setState([item.selection])}
      ranges={state}
      months={1}
      direction="horizontal"
      showSelectionPreview
      moveRangeOnFirstSelection={false}
    />
=======
    <>
      <div className="">
        <div className="">
          <div className="   position-relative mb-3" style={{maxWidth: "100%",width: "100%"}}>
            <p className="mb-0 text-start ct_fw_600 mb-2">Select Dates</p>
            <DatePicker
              multiple
              value={values}
              onChange={handleDateChange}
              plugins={[<DatePanel />]}
              format="DD MMM YYYY"
              className="w-100"
              placeholder="Select Dates"
            />
          </div>
        </div>
      </div>
    </>
>>>>>>> Stashed changes
  );
};

export default DateCalender;

