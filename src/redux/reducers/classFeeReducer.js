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
} from "../actions/classFeeAction";

const initialState = {
  isLoading: false,
  options: [],
  teacherList: [],
  students: [],
  feesandDuesData: [],
  classesList: [],
  classTypes: [],
  myclassData: [],
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
      arr.unshift({ value: "Class Type", label: "Class Type" });
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
  },
});

export default classFeeSlice.reducer;
