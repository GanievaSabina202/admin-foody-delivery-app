import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    imgUrl: [],
    progres: false,
    error: ''
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
        setError: (state, action) => {
            state.error = action.payload
        }
    },
})

export const { setImageUrl, removeImgUrl, progres, setError } = formSlice.actions
export default formSlice.reducer