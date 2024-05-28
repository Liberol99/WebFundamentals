import Products from './components/Products'
import Card from './components/Card'
import React, { useState, useEffect } from 'react';

const App = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    console.log('card set edildi !');
  }, [card]);

  return (
    <>
      <Card card={card} setCard={setCard} />
      <div className='container'>
        <div className='row w-100 p-0 m-0'>
          <Products card={card} setCard={setCard} />
        </div>
      </div>
    </>
  )
}

export default App