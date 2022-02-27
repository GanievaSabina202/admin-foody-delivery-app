import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    orders: [],
    loading: false,
    error: ""
}

export const fetchOrders = createAsyncThunk('fetchOrders', async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    return response.data;
})
export const fetchOrdersRemove = createAsyncThunk('fetchOrdersRemove', async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos${id}`);
    return response.data;
})


export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (bulider) => {
        bulider.addCase(fetchOrders.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.orders = [];
        });

        bulider.addCase(fetchOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.orders = action.payload
        });

        bulider.addCase(fetchOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Error';
        })
    }
})

export default ordersSlice.reducer