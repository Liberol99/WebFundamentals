import { useState, useEffect } from 'react'
import './App.css'
import Waiting from './components/Waiting';
import Popup from './components/Popup';

function App() {
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const option1 = document.createElement("option");
    option1.innerText = "İstanbul";
    option1.value = "1";
    const option2 = document.createElement("option");
    option2.innerText = "İzmir";
    option2.value = "2";
    const option3 = document.createElement("option");
    option3.innerText = "Antalya";
    option3.value = "3";
    const option4 = document.createElement("option");
    option4.innerText = "Ankara";
    const option5 = document.createElement("option");
    option5.innerText = "Balıkesir";
    const select = document.createElement("select");
    select.classList.add('form-control');
    select.id = "exampleFormControlSelect1";
    const label = document.createElement('label');
    label.innerText = "Şehir Seçin";
    label.style.marginTop = "20px";
    const div = document.createElement("div");
    div.className = "form-group";
    select.append(option1);
    select.append(option2);
    select.append(option3);
    select.append(option4);
    select.append(option5);
    div.append(label);
    div.append(select);
    const root = document.querySelector('#root');
    root.append(div);
    let h1 = document.createElement('h1');
    select.addEventListener('change', () => {
      setWaiting(true);
      h1.innerText = select.value;
      root.append(h1);
      setTimeout(() => {
        setWaiting(false);
      }, 1000);
    });
    const divs = [...document.querySelectorAll('div')];
    const filteredDivs = divs.filter(x => x.className === "form-group");
    console.log(filteredDivs);
    const myCart = [
      {
        userId: 1,
        cart: [
          {
            name: 'MacBook Air M1 Chip',
            price: 25.000
          },
          {
            name: 'MacBook Air M2 Chip',
            price: 35.000
          }
        ]
      },
      {
        userId: 2,
        cart: [
          {
            name: 'MacBook Air M1 Chip',
            price: 25.000
          },
          {
            name: 'MacBook Air M2 Chip',
            price: 35.000
          }
        ]
      }
    ]
    console.log(myCart.find(x => x.userId === 1));
  }, []);

  const [items, setItems] = useState([]);
  const selectedItem = (event, item) => {
    const itemsW = [...items];
    if (itemsW.some(x => x === item)) {
      let index = itemsW.findIndex(x => x === item);
      itemsW.splice(index, 1);
      setItems(itemsW);
    }
    else {
      itemsW.push(item);
      setItems(itemsW);
    }
    console.log(event.target);
  }
  console.log(items);

  return (
    <div className='border p-3 mt-3'>
      <div>
        <label>Türkiye</label>
        <input type='checkbox' className='m-2' name='Turkey' onChange={(event) => { selectedItem(event, "Türkiye"); }} />
        <label>İspanya</label>
        <input type='checkbox' className='m-2' name='Spain' onChange={(event) => { selectedItem(event, "İspanya"); }} />
      </div>
      <Waiting visible={waiting} />
      <Popup visible={true}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta alias voluptates cum tenetur placeat quaerat harum itaque suscipit. Ratione eius omnis vel accusamus? Quo aliquid quod commodi sed nihil.
        </p>
      </Popup>
    </div>
  )
}

export default App
