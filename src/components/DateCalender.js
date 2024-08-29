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
    <DateRangePicker
      onChange={(item) => setState([item.selection])}
      ranges={state}
      months={1}
      direction="horizontal"
      showSelectionPreview
      moveRangeOnFirstSelection={false}
    />
  );
};

export default DateCalender;

