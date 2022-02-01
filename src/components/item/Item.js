import * as React from 'react';
import "./Item.css";
import {Card, CardContent, Box, CardMedia, Typography} from  '@mui/material';
import ItemCount from '../itemCount/ItemCount';


 const Item=({props})=> {
  return (
    <div className="itemContainer"> 
      <Card sx={{ maxWidth: 250, maxHeight: 400, padding:2 }}>

          <CardMedia
          component="img"
          height="250"
          width="100"
          image={props.image}
        />

        <CardContent>

          <div style={{ width: 250, whiteSpace: 'nowrap' }}>
            <Box component="pS" sx={{textOverflow: 'clip', overflow: 'hidden'}}>
            {props.title}
            </Box>
          </div>

          <Typography variant="h5" color="text.secondary">
              ${props.price}
          </Typography>
          
        </CardContent>
    
        <ItemCount stock="20" initial="0" producto={props.title}/>       

      </Card>
    </div>
  );
 
}

export default Item

