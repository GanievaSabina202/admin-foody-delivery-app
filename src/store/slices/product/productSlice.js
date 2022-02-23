import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.products = action.payload
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        }
    },
})

export const { getData, removeProduct } = productSlice.actions

export default productSlice.reducer