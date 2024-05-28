import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from './pages/ShopPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShopPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
