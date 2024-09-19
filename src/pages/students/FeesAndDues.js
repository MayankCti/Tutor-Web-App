import React, { useEffect, useState } from "react";
import moment from "moment";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import SideBar from "../../layout/studentLayout/SideBar";
import Header from "../../layout/studentLayout/Header";
import { curSym, pipViewDate } from "../../utils/pip";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBillingStudent,
  payBilling,
} from "../../redux/actions/classFeeAction";
import Loader from "../../components/other/Loader";
import SelectDropdown from "../../components/formInput/SelectDropdown";
import NoRecord from "../../components/other/NoRecord";

function FeesAndDues() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const [month, setMonth] = useState("");

  const { isToggle } = useSelector((state) => state.authReducer);
  const { options1 } = useSelector((state) => state?.classFeeReducer);

  const { feesandDuesData, isLoading } = useSelector(
    (state) => state?.classFeeReducer
  );

  const sidebarActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    dispatch(fetchBillingStudent());
  }, []);

  useEffect(() => {
    if (month) dispatch(fetchBillingStudent(month));
  }, [month]);

  const generatePDF = (detail) => {
    const doc = new jsPDF();

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    };

    // Adding Title
    doc.setFontSize(18);
    doc.text("Fee Receipt", 90, 10, null, null, "left");

    // Adding Student Details Table
    doc.autoTable({
      startY: 20,
      head: [["Student Details", ""]],
      body: [
        [
          "Student Name",
          `${detail?.student?.first_name} ${detail?.student?.last_name}`,
        ],
        ["Date of Birth", formatDate(detail?.student?.date_of_birth)],
        ["Contact Number", detail?.student?.contact_number],
        [
          "Parent Name",
          `${detail?.student?.parent_first_name} ${detail?.student?.parent_last_name}`,
        ],
        ["Address", `${detail?.student?.address}, ${detail?.student?.city}`],
      ],
      headStyles: {
        halign: "left",
        fillColor: [22, 160, 133],
        textColor: [255, 255, 255],
      },
      margin: { top: 20 },
    });

    // Adding Teacher Details Table
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 10, // Start after previous table
      head: [["Teacher Details", ""]],
      body: [
        ["Teacher Name", detail?.teacher?.full_name],
        ["Subject", detail?.student?.subject],
        ["Class Date", formatDate(detail?.due_date)],
        ["Fee Receipt Date", formatDate(detail?.updated_at)],
        ["Per Hour Pricing", `$${detail?.teacher?.per_hour_pricing}`],
        ["Teacher Email", detail?.teacher?.email],
      ],
      headStyles: {
        halign: "left",
        fillColor: [22, 160, 133],
        textColor: [255, 255, 255],
      },
    });

    // Adding Fee Information Table with a centered header
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 10, // Start after previous table
      head: [["Payment Detail", ""]],
      body: [
        ["Total Paid", `$${detail?.total_due}`],
        ["Due Date", formatDate(detail?.due_date)],
      ],
      headStyles: {
        halign: "left",
        fillColor: [22, 160, 133],
        textColor: [255, 255, 255],
      },
    });

    // Save the PDF with a customized filename
    doc.save(
      `${detail?.student?.first_name}_${detail?.student?.last_name}_Fee_Receipt.pdf`
    );
  };

  const renderStatusButton = (item) => {
    if (!item?.payment_status) {
      return (
        <button
          className="ct_purple_btn py-1 px-3 ct_border_radius_10 ct_purple_bg ct_ff_roboto"
          type="button"
          onClick={() => {
            updatePayment(item);
          }}
        >
          Pay
        </button>
      );
    } else {
      return (
        <div className="d-flex align-items-center gap-2 justify-content-end">
          <button
            type="button"
            onClick={() => generatePDF(item)}
            className="ct_purple_btn py-1 px-3 ct_border_radius_10 ct_outline_btn_purple ct_purple_text ct_fw_700 ct_ff_roboto ct_hover_white_text"
          >
            Download Receipt
          </button>
        </div>
      );
    }
  };

  const updatePayment = (item) => {
    console.log({ item });
    const callback = (response) => {
      if (response?.success) {
        dispatch(fetchBillingStudent());
      }
    };
    dispatch(
      payBilling({
        payload: {
          billing_id: item?.id,
          payment_status: !item?.payment_status,
        },
        callback,
      })
    );
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <main className={active ? "" : "ct_collapsed_sidebar"}>
        <SideBar onToggleSidebar={sidebarActive} />
        <div className="ct_right_content">
          <Header onToggleSidebar={sidebarActive} />

          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg ct_mt_28">
              <div className="ct_px_46">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <h4 className="ct_fs_22 ct_ff_roboto ct_fw_600">Billing</h4>
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    <SelectDropdown
                      id="floatingInputValue"
                      options={options1}
                      defaultOptions="Month"
                      selectedValue={month}
                      onChange={setMonth}
                    />
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table ct_custom_table">
                    <thead>
                      <tr>
                        <th>S. No.</th>
                        <th>Teacher Name</th>
                        {/* <th>Streams</th> */}
                        <th>Total Due</th>
                        <th>Due Date</th>
                        <th>Payment Status</th>
                        <th className="text-end">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feesandDuesData?.length != 0 &&
                        feesandDuesData?.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <img
                                  src={
                                    item?.teacher?.profile_image ??
                                    "../assets/img/user_profile.png"
                                  }
                                  alt=""
                                  className="ct_img_36"
                                />
                                <h5 className="ct_fs_14 ct_fw_600 mb-0">
                                  {item?.teacher?.full_name}
                                </h5>
                              </div>
                            </td>
                            {/* <td>{item?.streams}</td> */}
                            <td>
                              {curSym} {item?.total_due}
                            </td>
                            <td>{pipViewDate(item?.due_date)}</td>
                            <td>
                              {item?.payment_status ? (
                                <span className="ct_fs_12 ct_fw_700 ct_green_text_dark">
                                  Paid
                                </span>
                              ) : (
                                <span className="text-danger">Unpaid</span>
                              )}
                            </td>
                            <td className="text-end">
                              {renderStatusButton(item)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  {feesandDuesData?.length == 0 && <NoRecord />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default FeesAndDues;
