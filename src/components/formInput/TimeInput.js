import { useState } from "react";
import { message } from "antd";
import moment from "moment";

const TimeInput = () => {
  const [timeRanges, setTimeRanges] = useState([{ start: null, end: null }]);
  const [errors, setErrors] = useState([]);

  // Function to handle adding a new time range
  const addTimeRange = () => {
    setTimeRanges([...timeRanges, { start: null, end: null }]);
  };

  // Function to handle deleting a time range
  const deleteTimeRange = (index) => {
    const updatedTimeRanges = [...timeRanges];
    updatedTimeRanges.splice(index, 1);
    setTimeRanges(updatedTimeRanges);
    setErrors((prevErrors) => prevErrors.filter((_, i) => i !== index));
  };

  // Function to handle time changes
  const handleTimeChange = (index, type, value) => {
    console.log(index, "<<<", type, "<<<", value, "<<<");
    const updatedTimeRanges = [...timeRanges];
    updatedTimeRanges[index][type] = value;
    setTimeRanges(updatedTimeRanges);

    // Validate overlapping times
    validateTimeRanges(updatedTimeRanges);
  };

  const onHandleClickOnTime = (index, type) => {
    const updatedTimeRanges = [...timeRanges];

    updatedTimeRanges[index] = {
      ...updatedTimeRanges[index],
      [type]: null,
    };

    setTimeRanges(updatedTimeRanges);
    // Add validation logic for overlapping times here if needed
  };

  // Validation function for overlapping times
  const validateTimeRanges = (ranges) => {
    const newErrors = [];
    for (let i = 0; i < ranges.length; i++) {
      let isValid = true;
      for (let j = 0; j < ranges.length; j++) {
        if (i !== j) {
          const range1Start = moment(ranges[i].start, "HH:mm");
          const range1End = moment(ranges[i].end, "HH:mm");
          const range2Start = moment(ranges[j].start, "HH:mm");
          const range2End = moment(ranges[j].end, "HH:mm");
          if (
            range1Start.isValid() &&
            range1End.isValid() &&
            range2Start.isValid() &&
            range2End.isValid() &&
            range1End.isAfter(range2Start) &&
            range1Start.isBefore(range2End)
          ) {
            isValid = false;
            newErrors[i] = "Time range overlaps with another range.";
            break;
          }
        }
      }
      if (isValid) {
        newErrors[i] = null;
      }
    }
    console.log({ newErrors }, "newErrors");
    setErrors(newErrors);
    // if (newErrors.every((error) => error === null)) {
    //   message.success("Valid time ranges!");
    // }
  };

  return {
    timeRanges,
    addTimeRange,
    deleteTimeRange,
    handleTimeChange,
    onHandleClickOnTime,
    errors,
  };
};

export default TimeInput;
