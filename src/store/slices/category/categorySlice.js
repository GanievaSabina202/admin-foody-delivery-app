// import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios';
// import { db } from '../../../config/firebase-config';

// const initialState = {
//     category: [],
//     loading: false,
//     error: ""
// }

// // const restuarantsCollectionRef = query(collection(db, "restaurants"), orderBy('uniqueId', 'desc'));
// // onSnapshot(restuarantsCollectionRef, (snapshot) => {
// //     dispatch(getRestaurants(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
// //     dispatch(reffing(snapshot.docs[snapshot.docs.length - 1]))
// // })

// // export const fetchCategory = createAsyncThunk('fetchCategory', async () => {
// //     const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
// //     return response.data;
// // })


// export const fetchCategory = createAsyncThunk('fetchCategory', async () => {
//     const categoryCollectionRef = query(collection(db, "restaurants"), orderBy('uniqueId', 'desc'));
//     onSnapshot(categoryCollectionRef, (snapshot) => {
//         console.log('isledi')
//         console.log(snapshot)
//         return snapshot
//         // return (snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//         // dispatch(reffing(snapshot.docs[snapshot.docs.length - 1]))
//     })
// })



// export const categorySlice = createSlice({
//     name: 'category',
//     initialState,
//     reducers: {

//         // getDataCategory: (state, action) => {
//         //     state.category = action.payload
//         // },
//         // removeCategory: (state, action) => {
//         //     state.category = state.category.filter(item => item.id !== action.payload)
//         // },
//     },

//     extraReducers: (bulider) => {
//         bulider.addCase(fetchCategory.pending, (state, action) => {
//             state.loading = true;
//             state.error = "";
//             state.category = [];
//         });

//         bulider.addCase(fetchCategory.fulfilled, (state, action) => {
//             state.loading = false;
//             state.error = "";
//             state.category = action.payload
//             console.log(action.payload)
//         });

//         bulider.addCase(fetchCategory.rejected, (state, action) => {
//             state.loading = false;
//             state.error = 'Error';
//         })
//     }
// })

// // export const { getDataCategory, removeCategory } = categorySlice.actions

// export default categorySlice.reducer