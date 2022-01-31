import React from 'react';
import ItemListContainer from './containers/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import './App.css';
import ItemCount from './components/ItemCount';


const nombre= "Nico";

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <ItemListContainer saludo={nombre}/>
      <ItemCount/>
    </div>
  );
}

export default App;
