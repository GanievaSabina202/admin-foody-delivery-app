import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    offers: [],
}

export const offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {
        getDataOffers: (state, action) => {
            state.offers = action.payload
        },
        removeOffers: (state, action) => {
            state.offers = state.offers.filter(item => item.id !== action.payload)
        }
    },
})

export const { getDataOffers, removeOffers } = offersSlice.actions

export default offersSlice.reducer