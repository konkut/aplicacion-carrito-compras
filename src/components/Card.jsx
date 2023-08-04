import React, { useState, useContext } from 'react'
import '../styles/card.css'
import { CarritoContext } from '../context/CarritoContext'


const Card = ({productos,producto}) => {
   
    const {id,image,title,description,price,status} = producto

    const {listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra} = useContext(CarritoContext)

    const handleAgregar = (producto)=>{
        agregarCompra(producto)
        productos.map(row => (row.id === id)? row.status = true: row)
    }
    const handleQuitar = (id)=>{
        eliminarCompra(id)
        productos.map(row => (row.id === id)? row.status = false: row)
    }

    return (
        <>
            <div className='tarjeta'>
                <img src={image} alt={title} className='tarjeta-imagen'/>
                <div className='tarjeta-contenido'>
                    <h3 className='tarjeta-titulo'>{title}</h3>
                    <p className='tarjeta-descripcion'>{description}</p>
                    <p className='tarjeta-precio'>{price}</p> 
                    {
                        status? <button type='button' className='boton-quitar' onClick={()=>handleQuitar(id)}>QUITAR</button>
                            : <button type='button' className='boton-agregar' onClick={()=>handleAgregar(producto)}>AGREGAR</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Card
