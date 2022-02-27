import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
    addDrawerStatus: false,
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        drawer: (state, dispatch) => {
            (!state.status) ? state.status = true : state.status = false;
        },
        addDrawer: (state, action) => {
            (!state.addDrawerStatus) ? state.addDrawerStatus = true : state.addDrawerStatus = false;
            console.log(state.addDrawerStatus);
        }
    },
})

export const { drawer, addDrawer } = drawerSlice.actions

export default drawerSlice.reducer