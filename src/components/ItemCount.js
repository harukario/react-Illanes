
import React from 'react';
import "./ItemCount.css";
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemCount =() =>{

    const stock= 20


    const [counter,setCounter]= React.useState(0)
    const HandlerCounterUp = () =>{
        if (counter<stock){
            setCounter (counter + 1)
        }
        else{
            alert("No hay stock disponible")
        }
        
    }
    
    
    const HandlerCounterDown = () =>{
        if (counter >=1 ){
        setCounter (counter - 1)}
            else{
                setCounter (counter)
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
        
            </CardContent>
        </Card>
  </div>
)

}
export default ItemCount 




