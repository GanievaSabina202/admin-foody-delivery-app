import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/category/categorySlice'
import drawerSlice from './slices/drawer/drawerSlices'
import offersSlice from './slices/offers/offersSlice'
import productSlice from './slices/product/productSlice'
export const store = configureStore({

    reducer: {
        drawer: drawerSlice,
        products: productSlice,
        category: categorySlice,
        offers: offersSlice,
    },
})