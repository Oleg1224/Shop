import { useSelector } from './../node_modules/react-redux/dist/react-redux.d';
import { configureStore } from "@reduxjs/toolkit";
import products from './products/products.slicer'
import user from './user/user.slicer'
import { TypedUseSelectorHook, useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        products: products,
        user: user
    }
})
export default store
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

//Сделать получение и добавление товаров
