import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: [],
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        getDataCategory: (state, action) => {
            state.category = action.payload
        },
        removeCategory: (state, action) => {
            state.category = state.category.filter(item => item.id !== action.payload)
        }
    },
})

export const { getDataCategory, removeCategory } = categorySlice.actions

export default categorySlice.reducer