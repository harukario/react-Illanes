import React from 'react';
import ItemListContainer from './containers/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import './App.css';
import ItemCount from './components/itemCount/ItemCount';


const nombre= "Nico";

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <ItemListContainer saludo={nombre}/>
      <ItemCount stock="20" initial="0" />
    </div>
  );
}

export default App;
