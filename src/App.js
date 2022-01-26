import React from 'react';
import ItemListContainer from './containers/ItemListContainer';
import Navbar from './components/navbar/Navbar';
import './App.css';


const nombre= "Nico";

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <ItemListContainer saludo={nombre}/>
    </div>
  );
}

export default App;
