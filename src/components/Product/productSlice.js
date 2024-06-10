import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],  
  },
  reducers: {
    // les actions 
    addProduct: (state, action) => {
      const newProduct = {
        id: Date.now(),
        nom: action.payload.nom,
        prix: action.payload.prix,
      };
      state.products.push(newProduct);
    },
    // supprimer un produit
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
    },
    // mettre à jour un produit
    updateProduct: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload };
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;

