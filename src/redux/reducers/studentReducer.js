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
      title: "Total Classes",
      value: "40",
      path: pageRoutes?.classes,
    },
    {
      backgroundColor: "#F0C274",
      iconSrc: "assets/img/user_icon.svg",
      title: "Total Students",
      value: "2514",
      path: pageRoutes?.student,
    },
    {
      backgroundColor: "#70A1E5",
      iconSrc: "assets/img/anount_icon.svg",
      title: "Time Due Amount",
      value: "$26",
      path: pageRoutes?.feeDue,
    },
    {
      backgroundColor: "#e570c8",
      iconSrc: "assets/img/total_payment_icon.svg",
      title: "Total Payments",
      value: "$236",
      path: pageRoutes?.feeDue,
    },
  ],
};

export const studentSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {},
});

export default studentSlice.reducer;
