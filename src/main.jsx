import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.jsx' */
import Hero from './Hero.jsx'
import './index.css'
import Home from './assets/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <Home />
  </React.StrictMode>,
)
