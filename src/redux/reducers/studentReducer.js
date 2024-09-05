import { createSlice } from "@reduxjs/toolkit";
import { pageRoutes } from "../../routes/pageRoutes";
import {
  createStudent,
  deleteStudent,
  fetchStudentList,
  fetchTeacherClasses,
  getTeacherList,
  updateStudent,
  uploadStudentFile,
} from "../actions/studentAction";

const initialState = {
  isLoading: false,
  students: [],
  cardData: [],
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

    // get-teacher-list
    builder.addCase(getTeacherList?.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTeacherList?.fulfilled, (state, action) => {
      const { data } = action?.payload;
      state.teacherList = data?.map((item, index) => {
        return { value: item?.id, label: item?.full_name };
      });
      state.isLoading = false;
    });
    builder.addCase(getTeacherList?.rejected, (state, action) => {
      state.isLoading = false;
    });

    // fetch-teacher-classes
    builder.addCase(fetchTeacherClasses?.fulfilled, (state, action) => {
      // const { data } = action?.payload;
      // state.teacherList = data?.map((item, index) => {
      //   return { value: item?.id, label: item?.full_name };
      // });
      state.isLoading = false;
    });
    builder.addCase(fetchTeacherClasses?.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTeacherClasses?.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default studentSlice.reducer;
