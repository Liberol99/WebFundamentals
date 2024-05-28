import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'

function App() {
  const [count, setCount] = useState(0);
  let customers = [{ name: "Orkan", price: 40000 }, { name: "Semih", price: 50000 }];

  useEffect(() => {
    console.log('count tetiklendi !');
  }, [count]);

  return (
    <>
      {count}
      <Home title={"Baba"} customers={customers} count={count} setCount={setCount} />
    </>
  )
}

export default App