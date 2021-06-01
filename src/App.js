import './App.css';
import SearchByName from './components/SearchByName';
import SearchById from './components/SearchByid';
// import SwitchComponents from './components/SwitchComponents';
import React, { useState } from 'react';

function App() {

  const [activeComponent, setActiveComponent] = useState('searchName')

  return (
    <div className="App">
      <h1>Find Cars</h1>
      <button onClick={() => setActiveComponent('searchName')}>
        <h3>Search by Name:</h3>
      </button>
      <button onClick={() => setActiveComponent('searchId')}>
        <h3>Search by ID:</h3>
      </button>
        {activeComponent === 'searchName' && <SearchByName name="SearchByName"/>}
        {activeComponent === 'searchId' &&  <SearchById name="searchById"/>}
        
    </div>
  );
}

export default App;
