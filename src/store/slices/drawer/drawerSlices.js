import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        drawer: (state, dispatch) => {
            (!state.status) ? state.status = true : state.status = false;
        }
    },
})

export const { drawer } = drawerSlice.actions

export default drawerSlice.reducer