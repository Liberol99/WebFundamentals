import { configureStore } from '@reduxjs/toolkit'
import FakeStoreReducer from '../features/FakeStore/FakeStoreSlice'

export const store = configureStore({
    reducer: {
        fake: FakeStoreReducer
    },
})