import React from 'react'
import { ProductosContext } from './ProductosContext'
import { useState, useEffect } from 'react'

//Tienen que escuchar los children y devolver los children
const ProductosProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    
    const fetchProductos = async()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        data.map(row=>{
            row.status = false;
        })
        setProductos(data);
    }   
    useEffect(() => {
        fetchProductos();
    }, [])

    return (
      <ProductosContext.Provider value={{productos}}>
          {children}
      </ProductosContext.Provider>
    )
}

export default ProductosProvider


