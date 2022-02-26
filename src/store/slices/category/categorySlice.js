import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    category: [],
    loading: false,
    error: ""
}

export const fetchCategory = createAsyncThunk('fetchCategory', async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    return response.data;
})



export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

        // getDataCategory: (state, action) => {
        //     state.category = action.payload
        // },
        // removeCategory: (state, action) => {
        //     state.category = state.category.filter(item => item.id !== action.payload)
        // },
    },
    
    extraReducers: (bulider) => {
        bulider.addCase(fetchCategory.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.category = [];
        });

        bulider.addCase(fetchCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.category = action.payload
        });

        bulider.addCase(fetchCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Error';
        })
    }
})

// export const { getDataCategory, removeCategory } = categorySlice.actions

export default categorySlice.reducer