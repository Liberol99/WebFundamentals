import { useState } from 'react'
import './App.css'
import CustomerForm from './components/CustomerForm/CustomerForm'
import CustomerList from './components/CustomerList/CustomerList'

const App = () => {
  const [customers, setCustomers] = useState([]);

  return (
    <>
      <div className='jumbotron bg-secondary'>
        <h3>Müşteri Kayıt Ekranı</h3>
        <CustomerForm customers={customers} setCustomers={setCustomers} />
        <CustomerList customers={customers} setCustomers={setCustomers} />
      </div>
    </>
  )
}

export default App
