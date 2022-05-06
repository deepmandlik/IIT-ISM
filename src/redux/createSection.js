import { createSlice } from "@reduxjs/toolkit";

export const sectionSlice = createSlice({
  name: "section",
  initialState: [],
  reducers: {
    addSection: (state, action) => {
      state.push({
        _id: action.payload.id,
        label: "",
        elements: [],
      });
    },
    addSectionLabel: (state, action) => {
      state.map((section) => {
        if (section._id === action.payload.id) {
          section.label = action.payload.label;
        }
      });
    },

  },
});

// Action creators are generated for each case reducer function
export const { addSection, addSectionLabel} = sectionSlice.actions;

export const sectionReducer = sectionSlice.reducer;
