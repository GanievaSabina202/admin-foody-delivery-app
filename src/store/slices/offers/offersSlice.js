import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    offers: [],
    loading: false,
    error: ""
}

export const fetchOffers = createAsyncThunk('fetchOffers', async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    return response.data;
})
export const fetchOffersRemove = createAsyncThunk('fetchOffersRemove', async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos${id}`);
    return response.data;
})


export const offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {
        // getDataOffers: (state, action) => {
        //     state.offers = action.payload
        // },
        // removeOffers: (state, action) => {
        //     state.offers = state.offers.filter(item => item.id !== action.payload)
        // }
    },
    extraReducers: (bulider) => {
        bulider.addCase(fetchOffers.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.offers = [];
        });

        bulider.addCase(fetchOffers.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.offers = action.payload
        });

        bulider.addCase(fetchOffers.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Error';
        })
    }
})

// export const { getDataOffers, removeOffers } = offersSlice.actions

export default offersSlice.reducer