import { createSlice } from "@reduxjs/toolkit";
import { pageRoutes } from "../../routes/pageRoutes";
import { createStudent, fetchStudentList, updateStudent } from "../actions/studentAction";

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
  extraReducers: (builder) => {
    // fetch-student-list
    builder.addCase(fetchStudentList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStudentList.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.students = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchStudentList.rejected, (state, action) => {
      state.isLoading = false;
    });
    // create-student
    builder.addCase(createStudent.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createStudent.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createStudent.rejected, (state, action) => {
      state.isLoading = false;
    });
    // update-student
    builder.addCase(updateStudent.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateStudent.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateStudent.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default studentSlice.reducer;
