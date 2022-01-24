import React from 'react';
import "./headerApp.css"
import logoHeader from "./logoHeader"


const headerApp = () => {
  return <div >
    <nav className="header"> 
      <ul>
        <li> 
        <logoHeader /> 
        </li>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Ofertas</li>
          <li>Carrito</li>
      </ul>
    </nav>
      Hola
  </div>;
};

export default headerApp;
