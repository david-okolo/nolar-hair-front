import { createSlice } from "@reduxjs/toolkit";
import { CartProduct, Product } from "../components/Store/store.interface";

const initialState: CartProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removedFromCart: (state, action) => {
      const removedItemIndex = state.findIndex(({ id }) => {
        return id === action.payload.id;
      });

      state.splice(removedItemIndex, 1);
    },
    clearedCart: (state) => {
      state.length = 0;
    },
    addedToCart: {
      reducer: (state, { payload }: any) => {
        state.push(payload);
      },
      prepare: (product: Product) => {
        return {
          payload: { ...product, count: 1, availableCount: product.count },
        };
      },
    },
    changeItemCount: (state, { payload: { id, value } }: any) => {
      state[id].count = value;
    },
  },
});

export const CartActions = cartSlice.actions;
export const CartReducer = cartSlice.reducer;
export const CartSelectors = {
  selectCart: (state: any): CartProduct[] => {
    return state.cart;
  },
};
