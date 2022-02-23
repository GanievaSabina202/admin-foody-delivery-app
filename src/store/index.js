import { configureStore } from '@reduxjs/toolkit'
import drawerSlice from './slices/drawer/drawerSlices'
import productSlice from './slices/product/productSlice'
export const store = configureStore({

    reducer: {
        drawer: drawerSlice,
        products: productSlice,
    },
})