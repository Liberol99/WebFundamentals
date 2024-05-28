import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stability from './components/Stability.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stability />
    </>
  )
}

export default App
