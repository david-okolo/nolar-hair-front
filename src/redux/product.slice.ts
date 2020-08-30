import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StoreCategory } from "../components/Store/store.interface";
import { getStoreList } from "../components/Store/store.service";

const initialState: StoreCategory[] = [];

export const getAllProducts = createAsyncThunk(
  "products/fetchedProducts",
  async () => {
    const { data } = await getStoreList();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.fulfilled.type]: (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    },
    [getAllProducts.rejected.type]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const ProductActions = productSlice.actions;
export const ProductReducer = productSlice.reducer;
export const ProductSelectors = {
  selectAllProducts: (state: { products: StoreCategory[] }) => {
    return state.products;
  },
};
