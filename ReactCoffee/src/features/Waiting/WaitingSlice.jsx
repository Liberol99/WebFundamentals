import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    waitingVisible: false,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        showWaiting: (state, action) => {
            const { waiting } = action.payload;
            state.waitingVisible = waiting;
        },
    },
})

export const { showWaiting } = counterSlice.actions

export default counterSlice.reducer