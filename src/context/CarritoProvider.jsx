import React, { Children, useReducer } from 'react'
import { CarritoContext } from './CarritoContext'

const initialState = []

const comprasReducer=(state=initialState,action={})=>{
    switch (action.type) {
        case '[CARRITO] Agregar compra':
            return [...state, action.payload]
        case '[CARRITO] Aumentar Cantidad':
            
            return state.map(row=>{
                const count = row.cantidad+1;
                if(row.id === action.payload) return {...row, cantidad: count}
                else return row
            })
        case '[CARRITO] Disminuir Cantidad':
            
            return state.map(row=>{
                const count = row.cantidad-1;
                if(count >= 1 && row.id === action.payload) return {...row, cantidad: count}
                else return row
            })
        case '[CARRITO] Eliminar Compra':
           
            state.map(row => {
                if(row.id === action.payload){
                    row.status = false
                    delete row.cantidad
                }
            })
            return state.filter(row => row.id !== action.payload);  

        default:
            return state;
    }
}

const CarritoProvider = ({children}) => {

    //Definimos la lista de compras
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (producto)=>{
        producto.cantidad = 1;
        const action = {
            type: '[CARRITO] Agregar compra',
            payload: producto
        }
        dispatch(action);
    }
    const aumentarCantidad = (id)=>{
        const action = {
            type: '[CARRITO] Aumentar Cantidad',
            payload: id
        }
        dispatch(action);
    }
    const disminuirCantidad = (id)=>{
        const action = {
            type: '[CARRITO] Disminuir Cantidad',
            payload: id
        }
        dispatch(action);
    }
    const eliminarCompra = (id)=>{
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        }
        dispatch(action);
    }

   
    return (
        <CarritoContext.Provider value={{listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra}}>
            {children}
        </CarritoContext.Provider>
    )
}


export default CarritoProvider
