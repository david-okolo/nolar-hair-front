import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./product.slice";
import { CartReducer } from "./cart.slice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
  },
});
