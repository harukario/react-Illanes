
import React from 'react';
import { useState } from "react";
import "./ItemCount.css";
import {ButtonGroup, Card, CardContent, Button, Typography} from '@mui/material';

const ItemCount =(props) =>{

    const [counter,setCounter]= useState(0)

    const HandlerCounterUp = () =>{
        if (counter<props.stock){
            setCounter (counter + 1)
        }
        else{
            alert ("No hay stock disponible")
        }
    }
        
        
    const HandlerCounterDown = () =>{
        if (counter>props.initial){
        setCounter (counter - 1)
        }
    }
    
    const onAdd = ()=>{
        const save= counter;
        if(counter>props.initial){
            alert( `Se añadieron ${save} productos a tu carrito ` )
        }
       
    }
return(
    <div className="container"> 
            <Card sx={{ maxWidth: 300 }}>
            <CardContent>
        
            <Typography variant="p" component="div">
                Producto
            </Typography>
            
            <div>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={HandlerCounterDown}>-</Button>
                <Button>{counter}</Button>
                <Button  onClick={HandlerCounterUp}>+</Button>
                </ButtonGroup>
        </div>
            <Button onClick={onAdd}>Agregar al carrito </Button>
        
            </CardContent>
        </Card>
  </div>
)

}
export default ItemCount 




