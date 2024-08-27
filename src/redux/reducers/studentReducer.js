import { createSlice } from "@reduxjs/toolkit";
import { pageRoutes } from "../../routes/pageRoutes";

const initialState = {
  isLoading: false,
  students: [
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      contactNo: "7896547857",
      city: "Bauchmouth",
      status: "Active",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      contactNo: "7896547857",
      city: "Bauchmouth",
      status: "Inactive",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      contactNo: "7896547857",
      city: "Bauchmouth",
      status: "Inactive",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      contactNo: "7896547857",
      city: "Bauchmouth",
      status: "Active",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      contactNo: "7896547857",
      city: "Bauchmouth",
      status: "Prospective",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      contactNo: "7896547857",
      city: "Bauchmouth",
      status: "Inactive",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      contactNo: "7896547857",
      city: "Bauchmouth",
      status: "Active",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      contactNo: "7896547857",
      city: "Bauchmouth",
      status: "Inactive",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      contactNo: "7896547857",
      city: "Bauchmouth",
      status: "Inactive",
    },
  ],
  cardData: [
    {
      backgroundColor: "#D398E7",
      iconSrc: "assets/img/student_icon.svg",
      title: "Total classes this week",
      value: "40",
      path: pageRoutes?.classes,
    },
    {
      backgroundColor: "#F0C274",
      iconSrc: "assets/img/user_icon.svg",
      title: "Total enrolled students",
      value: "2514",
      path: pageRoutes?.student,
    },
    {
      backgroundColor: "#70A1E5",
      iconSrc: "assets/img/anount_icon.svg",
      title: "Invoices due this week",
      value: "$26",
      path: pageRoutes?.billing,
    },
    {
      backgroundColor: "#e570c8",
      iconSrc: "assets/img/total_payment_icon.svg",
      title: "Total payments this week",
      value: "$236",
      path: pageRoutes?.billing,
    },
  ],
};

export const studentSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {},
});

export default studentSlice.reducer;
