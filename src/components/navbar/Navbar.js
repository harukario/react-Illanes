import React from 'react';
import "./Navbar.css"
import CartWidget from "../CartWidget"

const Navbar = () => {
  return <div>
       <nav className="navbar"> 
      <ul>
        <li><a><img className="navbarLogo" src="./images/logo.png" alt="Logo"/> </a></li>
          <li> <a>Inicio</a> </li>
          <li> <a>Productos</a> </li>
          <li> <a>Ofertas</a> </li>
          <li> <a> <CartWidget />  </a></li>  
      </ul>
    </nav>
  </div>;
};

export default Navbar