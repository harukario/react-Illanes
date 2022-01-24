import React from 'react';
import CartWidget from './CartWidget';
import "./ItemListContainer.css"


const ItemListContainer = (greeting) => {
  return <div>
    <nav className="header"> 
      <ul>
        <li> 
        </li>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Ofertas</li>
          <CartWidget /> 

      </ul>
    </nav>
      <h2> Hola {greeting.saludo}</h2>
  </div>;
};

export default ItemListContainer;
