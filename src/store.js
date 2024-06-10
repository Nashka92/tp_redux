import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./components/Product/productSlice";

export default configureStore({
  reducer: {
    product: productSlice,
  },
});
