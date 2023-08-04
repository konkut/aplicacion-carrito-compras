import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Navigate } from 'react-router-dom'
import Carrito from './pages/Carrito'
import Compras from './pages/Compras'
import ProductosProvider from './context/ProductosProvider'
import CarritoProvider from './context/CarritoProvider'

const CarritoCompras = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar></Navbar>
      </CarritoProvider>
    </ProductosProvider>
  )
}

export default CarritoCompras
