import { createSlice } from "@reduxjs/toolkit";

interface productsI {
    products: []
}
const initialState: productsI = {
    products: []
}
const productsSlicer = createSlice({
    name: 'products',
    initialState,
    reducers: {
        saveProducts(state, action) {
            state.products = action.payload
        }
    }
});
export const { saveProducts } = productsSlicer.actions;
export default productsSlicer.reducer