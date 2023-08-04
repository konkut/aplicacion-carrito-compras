import React, { useContext } from 'react'
import { styled } from '@mui/material/styles';
import Card from '../components/Card';
import { ProductosContext } from '../context/ProductosContext';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

const Compras = () => {

    const {productos} = useContext( ProductosContext )

    return (
    <>
        <DrawerHeader />
        <h1>Compras</h1>
        {
            productos.map(row=>(
                <Card 
                    key={row.id} 
                    productos={productos}
                    producto={row}           
                ></Card>
            ))
        }
    </>
)
}

export default Compras
