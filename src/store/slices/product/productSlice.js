import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    doc: {}
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
        },
        reffingProduct: (state, action) => {
            state.doc = action.payload
        }
    },
})

export const { getData, removeProduct, reffingProduct } = productSlice.actions

export default productSlice.reducer