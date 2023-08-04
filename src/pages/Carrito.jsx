import React, { useContext } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import { Button, Box, TableFooter} from '@mui/material';
import { CarritoContext } from '../context/CarritoContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Carrito = () => {

  const {listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra} = useContext(CarritoContext)

  const calcularTotal=()=>{
    return listaCompras.reduce((total,row) => total + row.price*row.cantidad, 0).toFixed(2);
  }
  const handleImpresion=()=>{
    print(); 
  }
  return (
    <>
        <DrawerHeader />
        <Typography variant="h4" color="error">Lista de Usuarios</Typography>
                     
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell align="right">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                            listaCompras.map(row => {
                                return (
                                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row"> {row.title}</TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">
                                            <IconButton aria-label="delete" size="large" onClick={()=>disminuirCantidad(row.id)}>
                                                <RemoveIcon fontSize="inherit" />
                                            </IconButton>
                                            <Chip label={row.cantidad} variant="outlined" />
                                            <IconButton aria-label="delete" size="large" onClick={()=>aumentarCantidad(row.id)}>
                                                <AddIcon fontSize="inherit" />
                                            </IconButton>    
                                        </TableCell>
                                        <TableCell align="right"><Button variant="contained" color="error" onClick={()=>eliminarCompra(row.id)}>Eliminar</Button></TableCell>
                                    </TableRow>                            
                                )
                            })
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell sx={{fontWeight: '600', fontSize: '16px', color:'#999'}} >Total:</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell sx={{fontWeight: '600', fontSize: '16px', color:'#999'}}  align="right">Bs {calcularTotal()}</TableCell>
                        </TableRow>
                    </TableFooter>    
                </Table>
            </TableContainer>  
            <Box>
              <Button 
                variant="contained" 
                color="info" 
                sx={{width: "100%", color: "#ddd", mt: 4, py:1}} 
                onClick={handleImpresion}
                disabled={listaCompras<1}
                >Guardar</Button>
            </Box>                                              
    </>
  )
}

export default Carrito
