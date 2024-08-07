import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    students : [
        {
          name: "Alfonso Westervelt",
          email: "Zoey.Boyle@gmail.com",
          contactNo:"7896547857",
          city:"Bauchmouth",
          status:"Active",
        },
        {
          name: "Alfonso Westervelt",
          email: "Zoey.Boyle@gmail.com",
          contactNo:"7896547857",
          city:"Bauchmouth",
          status:"Inactive",
        },
        {
          name: "Alfonso Westervelt",
          email: "Zoey.Boyle@gmail.com",
          contactNo:"7896547857",
          city:"Bauchmouth",
          status:"Inactive",
        },
        {
          name: "Alfonso Westervelt",
          email: "Zoey.Boyle@gmail.com",
          contactNo:"7896547857",
          city:"Bauchmouth",
          status:"Active",
        },
        {
          name: "Alfonso Westervelt",
          email: "Zoey.Boyle@gmail.com",
          contactNo:"7896547857",
          city:"Bauchmouth",
          status:"Prospective",
        },
        {
          name: "Alfonso Westervelt",
          email: "Zoey.Boyle@gmail.com",
          contactNo:"7896547857",
          city:"Bauchmouth",
          status:"Inactive",
        },
        {
          name: "Alfonso Westervelt",
          email: "Zoey.Boyle@gmail.com",
          contactNo:"7896547857",
          city:"Bauchmouth",
          status:"Active",
        },
        {
          name: "Alfonso Westervelt",
          email: "Zoey.Boyle@gmail.com",
          contactNo:"7896547857",
          city:"Bauchmouth",
          status:"Inactive",
        },
        {
          name: "Alfonso Westervelt",
          email: "Zoey.Boyle@gmail.com",
          contactNo:"7896547857",
          city:"Bauchmouth",
          status:"Inactive",
        },
      
      ]
};

export const studentSlice = createSlice({
    name: "student",
    initialState: initialState,
    reducers: {
    }
});

export default studentSlice.reducer;