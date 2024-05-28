import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage.jsx'
import Home from './components/Home.jsx';
import HomeCard from './components/HomeCard.jsx';
import Waiting from './components/Waiting.jsx';
import CoffeeHome from './components/CoffeeHome.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homecard" element={<HomeCard />} />
          <Route path="/coffee" element={<CoffeeHome />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Waiting />
    </>
  )
}

export default App
