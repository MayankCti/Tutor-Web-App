import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const DateCalender = ({ initialDates = [], onDatesChange }) => {
  const [values, setValues] = useState(
    initialDates.length > 0 ? initialDates.map((date) => new Date(date)) : []
  );

  useEffect(() => {
    if (onDatesChange) onDatesChange(values);
  }, [values, onDatesChange]);

  const handleDateChange = (dates) => {
    const updatedDates = dates.map((date) => new Date(date));
    setValues(updatedDates);
  };

  return (
    <>
      <div className="">
        <div className="">
          <div
            className="   position-relative mb-3"
            style={{ maxWidth: "100%", width: "100%" }}
          >
            <p className="mb-0 text-start ct_fw_600 mb-2">Select Dates</p>
            <DatePicker
              multiple
              value={values}
              onChange={handleDateChange}
              plugins={[<DatePanel />]}
              format="DD-MM-YYYY"
              className="w-100"
              placeholder="Select Dates"
              minDate={new Date()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DateCalender;
