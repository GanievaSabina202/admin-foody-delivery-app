import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    imgUrl: [],
    progres: false
}

export const formSlice = createSlice({
    name: 'imgUrl',
    initialState,
    reducers: {
        setImageUrl: (state, action) => {
            state.imgUrl = action.payload;
        },
        removeImgUrl: (state) => {
            state.imgUrl = [];
        },
        progres: (state) => {
            (!state.progres) ? state.progres = true : state.progres = false;
        },
    },
})

export const { setImageUrl, removeImgUrl, progres } = formSlice.actions
export default formSlice.reducer