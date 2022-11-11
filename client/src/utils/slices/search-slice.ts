import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFarm } from "../../interfaces/IFarm";
import { IProduct } from "../../interfaces/IProduct";

export interface SearchState {
  farms: Array<IFarm>;
  products: Array<IProduct>;
}

const initialState: SearchState = {
  farms: [],
  products: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFarms: (state, action: PayloadAction<Array<IFarm>>) => {
      state.farms = action.payload;
    },
    setProducts: (state, action: PayloadAction<Array<IProduct>>) => {
      state.products = action.payload;
    },
  },
});

export const { setFarms, setProducts } = searchSlice.actions;

export default searchSlice.reducer;
