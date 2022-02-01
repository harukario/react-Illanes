import React, {useState, useEffect} from 'react'; 
import "./ItemList.css"

import Item from "../item/Item"


const ItemList =()=>{
    const [items, setItems]= useState([]);

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItems(json));
}, []);
console.log(items)
    return(
        <div className="ItemListContainer">
           {items.map ((item) =>{
               return (
                   <div key={item.id} className="ItemContainer" > 
                   <Item props={item}/>
                    </div>
               )
           })}


        </div>
    )
}

export default ItemList