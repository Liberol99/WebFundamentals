import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, showMessage } from './features/counter/counterSlice.jsx'
import './App.css'

function App() {
  const { value } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const values = {
    val: "Orkan",
    val2: "Koroglu"
  }

  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          IncrementByAmount
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={() => { dispatch(showMessage(values)); }}>
          Mesaj Yaz
        </button>
      </div>
    </>
  )
}

export default App