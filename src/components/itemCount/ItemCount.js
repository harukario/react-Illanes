
import React from 'react';
import { useState } from "react";
import "./ItemCount.css";
import {ButtonGroup, CardContent, Button,} from '@mui/material';

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
            alert( `Se añadieron ${save} ${props.producto} a tu carrito ` )
        }
       
    }
return(
    <div className="container"> 
          
        <CardContent>
            <div>
                <ButtonGroup variant="outlined" aria-label="small outlined button group"  size="small"  >
                <Button onClick={HandlerCounterDown}>-</Button>
                <Button>{counter}</Button>
                <Button  onClick={HandlerCounterUp}>+</Button>
                </ButtonGroup>
            </div>
            <Button onClick={onAdd}>Agregar al carrito </Button>
        
        </CardContent>
        
  </div>
)

}
export default ItemCount 




