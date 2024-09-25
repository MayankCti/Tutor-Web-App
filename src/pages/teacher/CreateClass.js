import moment from "moment";
import "react-date-range/dist/styles.css";
import Sidebar from "../../layout/Sidebar";
import Headers from "../../layout/Headers";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/theme/default.css";
import React, { useEffect, useState } from "react";
import Loader from "../../components/other/Loader";
import { pageRoutes } from "../../routes/pageRoutes";
import { useDispatch, useSelector } from "react-redux";
import DateCalender from "../../components/DateCalender";
import TimeInput from "../../components/formInput/TimeInput";
import { TimePicker, Button, Row, Col, message } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import SelectDropdown from "../../components/formInput/SelectDropdown";
import {
  createClass,
  fetchClassesTypes,
} from "../../redux/actions/classFeeAction";

const CreateClass = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const { options, isLoading } = useSelector((state) => state.classFeeReducer);
  const { isToggle } = useSelector((state) => state.authReducer);
  const [selectedDates, setSelectedDates] = useState([]);

  const {
    timeRanges,
    addTimeRange,
    deleteTimeRange,
    handleTimeChange,
    onHandleClickOnTime,
    errors,
  } = TimeInput();

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };
  useEffect(() => {
    dispatch(fetchClassesTypes());
  }, []);


  const handleSubmit = () => {
    if (selectedDates?.length == 0) {
      return message.error("Please select a dates");
    }
    if (!selectedValue) {
      return message.error("Please select class type");
    }
    if (
      errors?.some((err) => err == "Time range overlaps with another range.")
    ) {
      return message.error("Time ranges overlap with another range.");
    } else {
      if (timeRanges?.some((item) => item?.start == null || item.end == null)) {
        return message.error(
          "Please fill start and end time for all time ranges."
        );
      }
    }
    const callback = (response) => {
      if (response.success) navigate(pageRoutes?.classes);
    };
    const data = [
      {
        class_dates: selectedDates,
        class_times: timeRanges,
        class_type: selectedValue,
      },
    ];
    dispatch(createClass({ payload: data, callback }));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className={isToggle ? "ct_collapsed_sidebar" : ""}>
      <Sidebar />
      <div className="ct_right_content">
        <Headers />
        <div className="ct_inner_dashbaord_main">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">Create Class</h4>
          </div>
          <fieldset className="mt-3 ct_caldner_white_bg">
            <div>
              <div id="range">
                <DateCalender
                  initialDates={selectedDates}
                  onDatesChange={handleDateChange}
                />
              </div>

              <SelectDropdown
                className={"form-control py-2   ct_fw_600 text-dark"}
                id="floatingInputValue"
                options={options}
                selectedValue={selectedValue}
                defaultOptions="Class Type"
                onChange={setSelectedValue}
              />
              <div className="d-flex align-items-end justify-content-start mt-3 gap-2">
                <div className="ct_flex_1">
                  {/* {timeRanges?.map((range, index) => (
                    <div className="w-100">
                      <Row key={index} gutter={10} style={{ marginBottom: 10 }}>
                        <Col className="ct_flex_1">
                          <TimePicker
                            className="ct_flex_1"
                            format="HH:mm"
                            value={
                              range.start ? moment(range.start, "HH:mm") : null
                            }
                            onClick={() => onHandleClickOnTime(index, "start")}
                            onChange={(time, timeString) => {
                              console.log({ timeString });
                              handleTimeChange(index, "start", timeString);
                            }}
                            placeholder="Start Time"
                          />
                        </Col>
                        <Col className="ct_flex_1">
                          <TimePicker
                            className="ct_flex_1"
                            format="HH:mm"
                            value={
                              range.end ? moment(range.end, "HH:mm") : null
                            }
                            onClick={() => onHandleClickOnTime(index, "end")}
                            onChange={(time, timeString) =>
                              handleTimeChange(index, "end", timeString)
                            }
                            placeholder="End Time"
                            disabledHours={() => {
                              const startHour = range.start
                                ? moment(range.start, "HH:mm").hour()
                                : 0;
                              return Array.from(
                                { length: startHour },
                                (_, i) => i
                              );
                            }}
                            disabledMinutes={(selectedHour) => {
                              const startHour = range.start
                                ? moment(range.start, "HH:mm").hour()
                                : -1;
                              const startMinute = range.start
                                ? moment(range.start, "HH:mm").minute()
                                : -1;
                              if (selectedHour === startHour) {
                                return Array.from(
                                  { length: startMinute + 1 },
                                  (_, i) => i
                                );
                              }
                              return [];
                            }}
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
                  ))} */}

                  {timeRanges?.map((range, index) => (
                    <div className="w-100" key={index}>
                      <Row gutter={10} style={{ marginBottom: 10 }}>
                        <Col className="ct_flex_1">
                          <TimePicker
                            className="ct_flex_1"
                            format="HH:mm"
                            value={
                              range.start ? moment(range.start, "HH:mm") : null
                            }
                            onClick={() => onHandleClickOnTime(index, "start")}
                            onChange={(time, timeString) =>
                              handleTimeChange(index, "start", timeString)
                            }
                            placeholder="Start Time"
                            // Disable hours and minutes if the end time is set and is before the start time
                            disabledHours={() => {
                              const endHour = range.end
                                ? moment(range.end, "HH:mm").hour()
                                : 24;
                              return Array.from(
                                { length: 24 },
                                (_, i) => i
                              ).filter((hour) => hour >= endHour);
                            }}
                            disabledMinutes={(selectedHour) => {
                              const endHour = range.end
                                ? moment(range.end, "HH:mm").hour()
                                : -1;
                              const endMinute = range.end
                                ? moment(range.end, "HH:mm").minute()
                                : -1;

                              if (selectedHour === endHour) {
                                return Array.from(
                                  { length: endMinute },
                                  (_, i) => i + endMinute
                                );
                              }
                              return [];
                            }}
                          />
                        </Col>
                        <Col className="ct_flex_1">
                          <TimePicker
                            className="ct_flex_1"
                            format="HH:mm"
                            value={
                              range.end ? moment(range.end, "HH:mm") : null
                            }
                            onClick={() => onHandleClickOnTime(index, "end")}
                            onChange={(time, timeString) =>
                              handleTimeChange(index, "end", timeString)
                            }
                            placeholder="End Time"
                            disabledHours={() => {
                              const startHour = range.start
                                ? moment(range.start, "HH:mm").hour()
                                : 0;
                              return Array.from(
                                { length: startHour },
                                (_, i) => i
                              );
                            }}
                            disabledMinutes={(selectedHour) => {
                              const startHour = range.start
                                ? moment(range.start, "HH:mm").hour()
                                : -1;
                              const startMinute = range.start
                                ? moment(range.start, "HH:mm").minute()
                                : -1;

                              if (selectedHour === startHour) {
                                return Array.from(
                                  { length: startMinute + 1 },
                                  (_, i) => i
                                );
                              }
                              return [];
                            }}
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
              </div>
            </div>
            <div>
              <button
                className="ct_purple_btn mt-3"
                onClick={() => handleSubmit()}
              >
                Save
              </button>
            </div>
          </fieldset>
        </div>
      </div>
    </main>
  );
};

export default CreateClass;
