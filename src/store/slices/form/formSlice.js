import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    imgUrl: null,
    progres: false
}

export const formSlice = createSlice({
    name: 'imgUrl',
    initialState,
    reducers: {
        setImageUrl: (state, dispatch) => {
            state.imgUrl = dispatch.payload;
        },
        removeImgUrl: (state) => {
            state.imgUrl = null
        },
        progres: (state) => {
            (!state.progres) ? state.progres = true : state.progres = false;
        },
    },
})

export const { setImageUrl, removeImgUrl, progres } = formSlice.actions
export default formSlice.reducer