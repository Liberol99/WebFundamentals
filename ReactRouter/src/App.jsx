import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import EmployeeAbout from './pages/EmployeeAbout.jsx'
import CompanyAbout from './pages/CompanyAbout.jsx'
import Products from './pages/Products.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} >
          <Route path='employee' element={<EmployeeAbout />} />
          <Route path='company' element={<CompanyAbout />} />
        </Route>
        <Route path='/product/:id' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
