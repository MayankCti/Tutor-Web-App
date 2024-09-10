import { createSlice } from "@reduxjs/toolkit";
import {
  createStudent,
  deleteStudent,
  fetchDashboard,
  fetchStudentList,
  fetchTeacherClasses,
  getTeacherList,
  updateStudent,
  uploadStudentFile,
} from "../actions/studentAction";
import { pageRoutes } from "../../routes/pageRoutes";

const initialState = {
  isLoading: false,
  students: [],
  cardData: [
    {
      backgroundColor: "#D398E7",
      iconSrc: "assets/img/student_icon.svg",
      title: "Total classes this week",
      value: "",
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
      value: "",
      path: pageRoutes?.feeDue,
    },
    {
      backgroundColor: "#e570c8",
      iconSrc: "assets/img/total_payment_icon.svg",
      title: "Total payments this week",
      value: "",
      path: pageRoutes?.feeDue,
    },
  ],
  options: [
    { value: "all", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ],
  teacherList: [
    { value: "all", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ],
};

export const studentSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch-dashboard
    builder.addCase(fetchDashboard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDashboard.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.cardData[0].value = data.total_classes_this_week ?? 0;
      state.cardData[1].value = data.total_enrolled_students ?? 0;
      state.cardData[2].value = data.total_due_amount ?? 0;
      state.cardData[3].value = data.total_payment ?? 0;
      state.isLoading = false;
    });
    builder.addCase(fetchDashboard.rejected, (state, action) => {
      state.isLoading = false;
    });
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
    // upload-student-file
    builder.addCase(uploadStudentFile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(uploadStudentFile.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(uploadStudentFile.rejected, (state, action) => {
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

    // delete-student
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteStudent.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteStudent.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default studentSlice.reducer;
