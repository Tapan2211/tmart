import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { AddItem, RemoveItem } from "../utill/config";

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
            const { id } = action.payload;
            // Filter out the item with the matching id
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.totalCount -= 1;
            toast.success(RemoveItem);
        }
    }
});

export const { addItem, removeItem } = CardSlice.actions;
export default CardSlice.reducer;