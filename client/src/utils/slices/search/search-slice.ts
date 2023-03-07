import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../../interfaces/ICategory";
import { IFarm } from "../../../interfaces/IFarm";
import { IProduct } from "../../../interfaces/IProduct";

export interface SearchState {
  farms: IFarm[];
  products: IProduct[];
  categories: ICategory[];
}

const initialState: SearchState = {
  farms: [],
  products: [],
  categories: []
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFarms: ((state, action: PayloadAction<IFarm[]>) => {
      state.farms = action.payload;
    }),
    setProducts: ((state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    }),
    setCategories: ((state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    }),
    setSelectedCategories: ((state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload
    })
  },
});

export const { setFarms, setProducts, setCategories } = searchSlice.actions;

export default searchSlice.reducer;
