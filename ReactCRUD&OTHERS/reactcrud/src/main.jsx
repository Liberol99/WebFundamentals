import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import App from './App.jsx'
import Books from './components/Books.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Books />
    <App />
  </div>
)
