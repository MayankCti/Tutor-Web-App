import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import DateCalender from "../DateCalender";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { handleCurrentStep } from "../../redux/reducers/authReducer";

import { TimePicker, Button, Row, Col } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import TimeInput from "../formInput/TimeInput";

const ThirdStep = () => {
  const {
    timeRanges,
    addTimeRange,
    deleteTimeRange,
    handleTimeChange,
    errors,
  } = TimeInput();
  const dispatch = useDispatch();
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  useEffect(() => {
    console.log({ object: timeRanges });
  }, [timeRanges]);
  return (
    <fieldset>
      <div>
        <h4 class="ct_fs_22 ct_fw_600 ct_ff_roboto mb-4">Availability</h4>

        <div id="range">
          <DateCalender
            initialStartDate={dateRange.startDate}
            initialEndDate={dateRange.endDate}
            onDateChange={setDateRange}
          />
        </div>
        <div>
          <div>
            {timeRanges?.map((range, index) => (
              <Row key={index} gutter={16} style={{ marginBottom: 10 }}>
                <Col>
                  <TimePicker
                    format="HH:mm"
                    value={range.start ? moment(range.start, "HH:mm") : null}
                    onChange={(time, timeString) =>
                      handleTimeChange(index, "start", timeString)
                    }
                    placeholder="Start Time"
                  />
                  {errors[index] && (
                    <div style={{ color: "red" }}>{errors[index]}</div>
                  )}
                </Col>
                <Col>
                  <TimePicker
                    format="HH:mm"
                    value={range.end ? moment(range.end, "HH:mm") : null}
                    onChange={(time, timeString) =>
                      handleTimeChange(index, "end", timeString)
                    }
                    placeholder="End Time"
                  />
                </Col>
                <Col>
                  <Button
                    type="danger"
                    icon={<DeleteOutlined />}
                    onClick={() => deleteTimeRange(index)}
                    disabled={timeRanges.length === 1}
                  />
                </Col>
              </Row>
            ))}
            <Button
              type="dashed"
              onClick={addTimeRange}
              icon={<PlusOutlined />}
            >
              Add More
            </Button>
          </div>
        </div>
      </div>
      <input
        type="button"
        name="previous"
        class="previous action-button ct_fs_18 ct_fw_600"
        value="Previous"
        onClick={() => dispatch(handleCurrentStep(2))}
      />
      <input
        type="button"
        name="next"
        class="next action-button ct_purple_btn text-white ct_fs_18 "
        value="Next"
        onClick={() => dispatch(handleCurrentStep(4))}
      />
    </fieldset>
  );
};

export default ThirdStep;
