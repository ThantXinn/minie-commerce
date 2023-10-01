import { Product_type } from "@/types/product_type";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: Product_type = {
    items: [],
    isLoading: false,
    error: null
};

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async (_,thunkApi) => {
        const res = await fetch(`${config.apiBaseUrl}/products`);
        const res_products = await res.json();
        thunkApi.dispatch(setProducts(res_products));
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
        }
    }
})

export const productReducer = productSlice.reducer;
export const { setProducts } = productSlice.actions;