import './App.css';
import SearchByName from './components/SearchByName';
import SearchById from './components/SearchByid';
import Results from './components/Results';
// import SwitchComponents from './components/SwitchComponents';
import React, { useState } from 'react';

function App() {

const [activeComponent, setActiveComponent] = useState('searchName');
const [activeResults, setActiveResults] = useState('');
const [id, setId] = useState();
const [make, setMake] = useState('');
const [model, setModel] = useState('');
const [year, setYear] = useState('');
const [car, setCar] = useState([]);

  return (
    <div className="App">
      <h1>Find Cars </h1>
      <button onClick={() => setActiveComponent('searchName')}>
        <h3>Search by Name:</h3>
      </button>
      <button onClick={() => setActiveComponent('searchId')}>
        <h3>Search by ID:</h3>
      </button>
        {activeComponent === 'searchName' && 
        <SearchByName name="SearchByName"
        make={make}
        setMake={setMake}
        model={model}
        setModel={setModel}
        year={year}
        setYear={setYear}
        car={car}
        setCar={setCar}
        setActiveResults={setActiveResults}
        />}
        {activeComponent === 'searchId' &&  
        <SearchById
        id={id}
        setId={setId}
        car={car}
        setCar={setCar}
        setActiveResults={setActiveResults}
        name="searchById"
         
         />}
         { activeResults === 'Results' &&
          <Results
        name="results"
        car={car}/>  
         }
       
    </div>
  );
}

export default App;
