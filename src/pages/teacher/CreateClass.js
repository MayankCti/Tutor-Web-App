import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import TimeInput from "../../components/formInput/TimeInput";
import DateCalender from "../../components/DateCalender";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { TimePicker, Button, Row, Col } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";

const CreateClass = () => {
  const { isToggle } = useSelector((state) => state.authReducer);
  const [selectedDates, setSelectedDates] = useState([]);

  const {
    timeRanges,
    addTimeRange,
    deleteTimeRange,
    handleTimeChange,
    errors,
  } = TimeInput();

  const handleDateChange = (dates) => {
    console.log("Selected Dates in Parent:", dates);
    setSelectedDates(dates);
  };

  return (
    <main className={isToggle ? "ct_collapsed_sidebar" : ""}>
      <Sidebar />
      <div className="ct_right_content">
        <Headers />
        <div className="ct_inner_dashbaord_main">
          <div className="d-flex align-items-center justify-content-between">
            <h4 class="ct_fs_22 ct_ff_roboto ct_fw_600">Create Class</h4>

            <button className="ct_purple_btn">+ Add New Date</button>
          </div>
          <fieldset className="mt-3 ct_caldner_white_bg" >
            <div>
              <div id="range">
                <DateCalender
                  initialDates={selectedDates}
                  onDatesChange={handleDateChange}
                />
              </div>
              <di className="d-flex align-items-end justify-content-center mt-3 gap-2">
                <div>
                  {timeRanges?.map((range, index) => (
                    <div>
                      <Row key={index} gutter={10} style={{ marginBottom: 10 }}>
                        <Col>
                          <TimePicker
                            format="HH:mm"
                            value={
                              range.start ? moment(range.start, "HH:mm") : null
                            }
                            onChange={(time, timeString) =>
                              handleTimeChange(index, "start", timeString)
                            }
                            placeholder="Start Time"
                          />
                        </Col>
                        <Col>
                          <TimePicker
                            format="HH:mm"
                            value={
                              range.end ? moment(range.end, "HH:mm") : null
                            }
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
                      {errors[index] && (
                        <div style={{ color: "red" }}>{errors[index]}</div>
                      )}
                    </div>
                  ))}
                </div>
                <Button
                  type="dashed"
                  className="ct_purple_btn p-0"
                  onClick={addTimeRange}
                  icon={<PlusOutlined />}
                ></Button>
              </di>
            </div>
          </fieldset>

        </div>
      </div>
    </main>
  );
};

export default CreateClass;
