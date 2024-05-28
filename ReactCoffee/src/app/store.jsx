import { configureStore } from '@reduxjs/toolkit'
import waitingReducer from '../features/Waiting/WaitingSlice'
import coffeeReducer from '../features/Coffee/CoffeeSlice'

export const store = configureStore({
    reducer: {
        waiting: waitingReducer,
        coffee: coffeeReducer
    },
})