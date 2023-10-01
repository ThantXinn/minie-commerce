import { CartSlice_type } from "@/types/cartslice_type";
import { createSlice } from "@reduxjs/toolkit";

const initialState : CartSlice_type = {
    items: [],
    isLoading: false,
    error: null,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action ) =>{
            state.items = [...state.items, action.payload]
        },
        updateQuantity: (state, action) => {
            const quantity = action.payload.quantity;
            if (!quantity) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            } else {
                state.items = state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item)
            }
        }
    }
})

export const cartSliceReducer = cartSlice.reducer;
export const { addToCart,updateQuantity } = cartSlice.actions;