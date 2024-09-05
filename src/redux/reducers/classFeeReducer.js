import { createSlice } from "@reduxjs/toolkit";
import { fetchClasses, createClass } from "../actions/classFeeAction";

const initialState = {
  isLoading: false,
  options: [
    { value: "Class type", label: "Class type" },
    { value: "1:1 Classes", label: "1:1 Classes" },
    { value: "Group Class", label: "Group Class" },
    { value: "School Readiness", label: "School Readiness" },
    { value: "Homework Clubs", label: "Homework Clubs" },
  ],
};

export const classFeeSlice = createSlice({
  name: "classFee",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch-student-list
    builder.addCase(fetchClasses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchClasses.fulfilled, (state, action) => {
      const { data } = action?.payload ?? {};
      const arr = data?.map((item, index) => {
        return { value: item?.class_type_name, label: item?.class_type_name };
      });
      arr.unshift({ value: "Class Type", label: "Class Type" });
      state.options = arr ?? [];
      state.isLoading = false;
    });
    builder.addCase(fetchClasses.rejected, (state, action) => {
      state.isLoading = false;
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
  },
});

export default classFeeSlice.reducer;
