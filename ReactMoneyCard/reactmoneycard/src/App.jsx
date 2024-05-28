import MoneyCard from './components/MoneyCard.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MoneyCard headerText="Migros MoneyCard Uygulamasi" />
    </>
  )
}

export default App
