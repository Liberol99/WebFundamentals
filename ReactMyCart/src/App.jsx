import { useState, useEffect } from 'react'
import './App.css'
import { SoDManager } from './SoDManager';

function App() {
  let sodManager = new SoDManager();
  const [myCard, setmyCard] = useState(sodManager.myCard);

  let product = {
    recId: Math.random(),
    name: "Phone",
    price: 40.000,
    count: 2
  }

  useEffect(() => {
    console.log(myCard);
  });

  return (
    <>
      <button onClick={() => { setmyCard([...myCard, product]); sodManager.setCard(product); console.log(myCard); }}>Ekle</button>
      {
        (myCard)
        &&
        (
          myCard.map((item) => (
            <p key={item.recId}>{item.name}</p>
          ))
        )
      }
    </>
  )
}

export default App
