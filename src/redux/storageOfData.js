import { createSlice } from "@reduxjs/toolkit";

export const storageSlice = createSlice({
  name: "storage",
  initialState: [],
  reducers: {
    addLabel: (state, action) => {
      const sectionExits = state.find(
        (section) => section.id === action.payload.sectionId
      );
      if (!sectionExits) {
        state.push({
          id: action.payload.sectionId,
          label: action.payload.sectionLabel,
          elements: [],
        });
      }
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );

      const elementIndex = state[sectionIndex].elements.findIndex(
        (element) => element.id === action.payload.elementId
      );

      if (elementIndex !== -1) {
        state[sectionIndex].elements[elementIndex].label =
          action.payload.elementLabel;
        state[sectionIndex].elements[elementIndex].value =
          action.payload.elementValue;
      } else {
        state[sectionIndex].elements.push({
          id: action.payload.elementId,
          label: action.payload.elementLabel,
          value: action.payload.elementValue,
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLabel } = storageSlice.actions;

export const storageReducer = storageSlice.reducer;
