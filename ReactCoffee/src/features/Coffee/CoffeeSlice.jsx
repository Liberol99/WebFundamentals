import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    coffeeData: [],
}

export const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        addCoffee: (state, action) => {
            state.coffeeData.push(action.payload)
        },
        approveCoffee: (state, action) => {
            let data = current(state.coffeeData)
            console.log(data);
            console.log(action);
            let _coffee = data.find(x => x.recId === action.payload)
            let indexNo = data.findIndex(x => x.recId === action.payload)
            if (_coffee.isApproved === false) {
                _coffee.isApproved = true
                data.splice(indexNo, 1, _coffee)
                coffeeData = [...data]
                return
            }
            else {
                _coffee.isApproved = false
                data.splice(indexNo, 1, _coffee)
                coffeeData = [...data]
                return
            }
        }
    },
})

export const { addCoffee, approveCoffee } = coffeeSlice.actions

export default coffeeSlice.reducer