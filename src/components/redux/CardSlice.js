import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { AddItem, ExitItem } from "../utill/config";

const initialState = {
    items: [],
    totalCount: 0
}

const CardSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalCount += 1;
            toast.success(AddItem);

        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.totalCount -= 1;
        }
    }
});

export const { addItem, removeItem } = CardSlice.actions;
export default CardSlice.reducer;