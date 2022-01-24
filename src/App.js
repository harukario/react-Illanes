import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import './App.css';


const nombre= "Nico";

function App() {
  return (
    <div className="App">     
      <ItemListContainer saludo={nombre}/>
    </div>
  );
}

export default App;
