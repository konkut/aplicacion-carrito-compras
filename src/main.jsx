import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/card.css'
import './styles/lista.css'
import CarritoCompras from './CarritoCompras'
import {BrowserRouter} from 'react-router-dom' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarritoCompras></CarritoCompras>
    </React.StrictMode>
  </BrowserRouter>
)
