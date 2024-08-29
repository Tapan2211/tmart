import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CardSlice';

export const store = configureStore({
    reducer: {
        cart: CartReducer,
    }
});