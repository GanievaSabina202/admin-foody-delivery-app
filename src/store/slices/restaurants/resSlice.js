import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurants: [],
    doc: {}
}

export const resSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        getRestaurants: (state, action) => {
            state.restaurants = action.payload
        },
        setPagination: (state, action) => {
            state.restaurants = [...state.restaurants, ...action.payload]
        },
        reffing: (state, action) => {
            state.doc = action.payload
        }
    },
})

export const { getRestaurants, setPagination, reffing } = resSlice.actions

export default resSlice.reducer