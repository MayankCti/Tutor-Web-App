import { createSlice } from "@reduxjs/toolkit";
import {
  fetchClassesTypes,
  createClass,
  fetchTeacherClasses,
  getTeacherList,
  fetchBilling,
  fetchBillingStudent,
  fetchClasses,
  filterClasses,
  deleteClassType,
  createClassType,
  updateClassType,
  fetchMyBookedClasses,
  BookClass,
  payBilling,
  fetchClassesStudents,
} from "../actions/classFeeAction";

const initialState = {
  isLoading: false,
  options: [],
  options1: [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ],
  teacherList: [],
  students: [],
  feesandDuesData: [],
  classesList: [],
  teacherClassesList: [],
  classTypes: [],
  myclassData: [],
  classesStudents: [],
};

export const classFeeSlice = createSlice({
  name: "classFee",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch-classes
    builder.addCase(fetchClasses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchClasses.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.classesList = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchClasses.rejected, (state, action) => {
      state.isLoading = false;
    });

    // fetch-classes
    builder.addCase(filterClasses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(filterClasses.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.classesList = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(filterClasses.rejected, (state, action) => {
      state.isLoading = false;
    });

    // fetch-classes-types
    builder.addCase(fetchClassesTypes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchClassesTypes.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      const arr = data?.map((item, index) => {
        return { value: item?.class_type_name, label: item?.class_type_name };
      });
      state.options = arr ?? [];
      state.classTypes = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchClassesTypes.rejected, (state, action) => {
      state.isLoading = false;
    });

    // create-class-type
    builder.addCase(createClassType.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createClassType.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createClassType.rejected, (state, action) => {
      state.isLoading = false;
    });

    // update-class-type
    builder.addCase(updateClassType.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateClassType.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateClassType.rejected, (state, action) => {
      state.isLoading = false;
    });

    // delete-class-type
    builder.addCase(deleteClassType.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteClassType.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteClassType.pending, (state, action) => {
      state.isLoading = true;
    });

    // create-class
    builder.addCase(createClass.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createClass.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createClass.rejected, (state, action) => {
      state.isLoading = false;
    });

    // get-teacher-list
    builder.addCase(getTeacherList?.pending, (state, action) => {
      state.teacherClassesList = [];
      state.isLoading = true;
    });
    builder.addCase(getTeacherList?.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.teacherClassesList = [];
      state.teacherList = data?.map((item, index) => {
        return { value: item?.id, label: item?.full_name };
      });
      state.isLoading = false;
    });
    builder.addCase(getTeacherList?.rejected, (state, action) => {
      state.teacherClassesList = [];
      state.isLoading = false;
    });

    // book-class
    builder.addCase(BookClass.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(BookClass.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(BookClass.rejected, (state, action) => {
      state.isLoading = false;
    });

    // fetch-teacher-classes
    builder.addCase(fetchTeacherClasses?.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.teacherClassesList = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchTeacherClasses?.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTeacherClasses?.rejected, (state, action) => {
      state.isLoading = false;
    });

    // fetch-billing
    builder.addCase(fetchBilling.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBilling.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.students = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchBilling.rejected, (state, action) => {
      state.isLoading = false;
    });

    // fetch-billing-student
    builder.addCase(fetchBillingStudent.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBillingStudent.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.feesandDuesData = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchBillingStudent.rejected, (state, action) => {
      state.isLoading = false;
    });

    // fetch-my-booked-classes
    builder.addCase(fetchMyBookedClasses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMyBookedClasses.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.myclassData = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchMyBookedClasses.rejected, (state, action) => {
      state.isLoading = false;
    });

    //pay-Billing
    builder.addCase(payBilling.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(payBilling.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(payBilling.rejected, (state, action) => {
      state.isLoading = false;
    });

    //fetch-classes-students
    builder.addCase(fetchClassesStudents.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchClassesStudents.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      state.classesStudents = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchClassesStudents.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default classFeeSlice.reducer;
