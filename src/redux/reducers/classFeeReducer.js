import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  students: [
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      totalDue: "2500",
      dueDate: new Date(),
      status: "Due",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      totalDue: "2500",
      dueDate: new Date(),
      status: "Paid",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      totalDue: "2500",
      dueDate: new Date(),
      status: "Paid",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      totalDue: "2500",
      dueDate: new Date(),
      status: "Due",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      totalDue: "2500",
      dueDate: new Date(),
      status: "Due",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      totalDue: "2500",
      dueDate: new Date(),
      status: "Paid",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      totalDue: "2500",
      dueDate: new Date(),
      status: "Due",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      totalDue: "2500",
      dueDate: new Date(),
      status: "Paid",
    },
    {
      name: "Alfonso Westervelt",
      email: "Zoey.Boyle@gmail.com",
      totalDue: "2500",
      dueDate: new Date(),
      status: "Paid",
    },
  ],
};

export const classFeeSlice = createSlice({
  name: "classFee",
  initialState: initialState,
  reducers: {},
});

export default classFeeSlice.reducer;
