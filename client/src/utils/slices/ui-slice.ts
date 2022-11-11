import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  activePage: string;
  profileDropdown: boolean;
  modal: {
    open: boolean;
    display?: object;
    form?: object;
  };
}

const initialState: UiState = {
  activePage: "",
  profileDropdown: false,
  modal: {
    open: false,
    display: {},
    form: {},
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleProfileDropdown: (state) => {
      state.profileDropdown = !state.profileDropdown;
    },
    toggleModal: (state) => {
      state.modal.open = !state.modal.open;
    },
    setModalDisplay: (state, action: PayloadAction<object>) => {
      state.modal.display = action.payload;
    },
    updateModalFormData: (state, action: PayloadAction<object>) => {
      state.modal.form = action.payload;
    },
    setActivePage: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    },
  },
});

export const {
  toggleModal,
  toggleProfileDropdown,
  setActivePage,
  setModalDisplay,
  updateModalFormData,
} = uiSlice.actions;

export default uiSlice.reducer;
