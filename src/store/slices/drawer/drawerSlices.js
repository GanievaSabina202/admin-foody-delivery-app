import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
    addDrawerStatus: false,
    delModalStatus: false,
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        drawer: (state) => {
            (!state.status) ? state.status = true : state.status = false;
        },
        addDrawer: (state) => {
            (!state.addDrawerStatus) ? state.addDrawerStatus = true : state.addDrawerStatus = false;
        },
        delModal: (state) => {
            (!state.delModalStatus) ? state.delModalStatus = true : state.delModalStatus = false;
        },
    },
})

export const { drawer, addDrawer, delModal } = drawerSlice.actions

export default drawerSlice.reducer