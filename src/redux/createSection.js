import { createSlice } from "@reduxjs/toolkit";

export const sectionSlice = createSlice({
  name: "section",
  initialState: [],
  reducers: {
    addSection: (state, action) => {
      state.push({
        id: action.payload.sectionId,
        label: "",
        elements: [],
      });
    },
    addSectionLabel: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      state[sectionIndex].label = action.payload.sectionLabel;
    },
    deleteSection: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      state.splice(sectionIndex, 1);
    },
    addElement: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      if (action.payload.elementType === "Single Field") {
        state[sectionIndex].elements.push({
          id: action.payload.elementId,
          type: action.payload.elementType,
          label: "",
          child: [],
        });
      } else {
        state[sectionIndex].elements.push({
          id: action.payload.elementId,
          type: action.payload.elementType,
          label: "",
          element: [],
        });
      }
    },
    addElementLabel: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      const elementIndex = state[sectionIndex].elements.findIndex(
        (element) => element.id === action.payload.elementId
      );
      if (action.payload.groupElementId === null) {
        state[sectionIndex].elements[elementIndex].label =
          action.payload.elementLabel;
      } else {
        const groupElementIndex = state[sectionIndex].elements[
          elementIndex
        ].element.findIndex(
          (element) => element.id === action.payload.groupElementId
        );
        console.log(
          "grpindex",
          groupElementIndex,
          action.payload.groupElementId
        );
        state[sectionIndex].elements[elementIndex].element[
          groupElementIndex
        ].label = action.payload.elementLabel;
      }
    },
    deleteElement: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      const elementIndex = state[sectionIndex].elements.findIndex(
        (element) => element.id === action.payload.elementId
      );
      if (action.payload.groupElementId === null) {
        state[sectionIndex].elements.splice(elementIndex, 1);
      } else {
        const groupElementIndex = state[sectionIndex].elements[
          elementIndex
        ].element.findIndex(
          (element) => element.id === action.payload.groupElementId
        );
        state[sectionIndex].elements[elementIndex].element.splice(
          groupElementIndex,
          1
        );
      }
    },
    addChild: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      const elementIndex = state[sectionIndex].elements.findIndex(
        (element) => element.id === action.payload.elementId
      );
      if (action.payload.groupElementId === null) {
        state[sectionIndex].elements[elementIndex].child.push({
          id: action.payload.childId,
          type: "",
          label: "",
          values: [],
        });
      } else {
        const groupElementIndex = state[sectionIndex].elements[
          elementIndex
        ].element.findIndex(
          (element) => element.id === action.payload.groupElementId
        );
        state[sectionIndex].elements[elementIndex].element[
          groupElementIndex
        ].child.push({
          id: action.payload.childId,
          type: "",
          label: "",
          values: [],
        });
      }
    },
    addGroupElement: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      const elementIndex = state[sectionIndex].elements.findIndex(
        (element) => element.id === action.payload.elementId
      );
      if (state[sectionIndex].elements[elementIndex].type !== "Single Field") {
        state[sectionIndex].elements[elementIndex].element.push({
          id: action.payload.groupElementId,
          type: action.payload.groupElementType,
          label: "",
          child: [],
        });
        console.log(action.payload.groupElementId);
      }
    },
    addGroupElementLabel: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      const elementIndex = state[sectionIndex].elements.findIndex(
        (element) => element.id === action.payload.elementId
      );
      if (state[sectionIndex].elements[elementIndex].type !== "Single Field") {
        state[sectionIndex].elements[elementIndex].label =
          action.payload.groupElementLabel;
      }
    },
    deleteGroupElement: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      const elementIndex = state[sectionIndex].elements.findIndex(
        (element) => element.id === action.payload.elementId
      );
      if (state[sectionIndex].elements[elementIndex].type !== "Single Field") {
        state[sectionIndex].elements.splice(elementIndex, 1);
      }
    },
    addchildLabel: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      const elementIndex = state[sectionIndex].elements.findIndex(
        (element) => element.id === action.payload.elementId
      );
      if (action.payload.groupElementId === null) {
        const childIndex = state[sectionIndex].elements[
          elementIndex
        ].child.findIndex((child) => child.id === action.payload.childId);
        state[sectionIndex].elements[elementIndex].child[childIndex].label =
          action.payload.childLabel;
      } else {
        const groupElementIndex = state[sectionIndex].elements[
          elementIndex
        ].element.findIndex(
          (element) => element.id === action.payload.groupElementId
        );
        const childIndex = state[sectionIndex].elements[elementIndex].element[
          groupElementIndex
        ].child.findIndex((child) => child.id === action.payload.childId);
        state[sectionIndex].elements[elementIndex].element[
          groupElementIndex
        ].child[childIndex].label = action.payload.childLabel;
      }
    },
    addchildType: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      const elementIndex = state[sectionIndex].elements.findIndex(
        (element) => element.id === action.payload.elementId
      );
      if (action.payload.groupElementId === null) {
        const childIndex = state[sectionIndex].elements[
          elementIndex
        ].child.findIndex((child) => child.id === action.payload.childId);
        state[sectionIndex].elements[elementIndex].child[childIndex].type =
          action.payload.childType;
      } else {
        const groupElementIndex = state[sectionIndex].elements[
          elementIndex
        ].element.findIndex(
          (element) => element.id === action.payload.groupElementId
        );
        const childIndex = state[sectionIndex].elements[elementIndex].element[
          groupElementIndex
        ].child.findIndex((child) => child.id === action.payload.childId);
        state[sectionIndex].elements[elementIndex].element[
          groupElementIndex
        ].child[childIndex].type = action.payload.childType;
      }
    },
    addDropdownKey: (state, action) => {
      const sectionIndex = state.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      const elementIndex = state[sectionIndex].elements.findIndex(
        (element) => element.id === action.payload.elementId
      );
      if (action.payload.groupElementId === null) {
        const childIndex = state[sectionIndex].elements[
          elementIndex
        ].child.findIndex((child) => child.id === action.payload.childId);
        state[sectionIndex].elements[elementIndex].child[
          childIndex
        ].values.push(action.payload.keyLabel);
      } else {
        const groupElementIndex = state[sectionIndex].elements[
          elementIndex
        ].element.findIndex(
          (element) => element.id === action.payload.groupElementId
        );
        const childIndex = state[sectionIndex].elements[elementIndex].element[
          groupElementIndex
        ].child.findIndex((child) => child.id === action.payload.childId);
        state[sectionIndex].elements[elementIndex].element[
          groupElementIndex
        ].child[childIndex].values.push(action.payload.keyLabel);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addSection,
  addSectionLabel,
  deleteSection,
  addElement,
  addElementLabel,
  deleteElement,
  addChild,
  addGroupElement,
  addGroupElementLabel,
  deleteGroupElement,
  addchildLabel,
  addchildType,
  addDropdownKey,
} = sectionSlice.actions;

export const sectionReducer = sectionSlice.reducer;
