import { createSlice } from "@reduxjs/toolkit";

interface userI {

    email: string
    type: null | string
    isLogin: boolean

}
const initialState: userI = {

    email: '',
    type: null,
    isLogin: false

}
const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        editProduct(state, action) {
           
        }
    }
});
export const { editProduct } = userSlicer.actions;
export default userSlicer.reducer