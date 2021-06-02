import './App.css';
import SearchByMakeModelYear from './components/SearchByMakeModelYear';
import SearchByMakeModel from './components/SearchByMakeModel';
import SearchByMake from './components/SearchByMake';
import SearchById from './components/SearchByid';
import Results from './components/Results';
import React, { useState } from 'react';

function App() {

const [activeComponent, setActiveComponent] = useState('searchMake&Model');
const [activeResults, setActiveResults] = useState('');
const [id, setId] = useState();
const [make, setMake] = useState('');
const [model, setModel] = useState('');
const [year, setYear] = useState('');
const [car, setCar] = useState([]);

  return (
    <div className="App">
      <h1>Find Cars </h1>
      <button onClick={() => setActiveComponent('searchMake')}>
        <h3>Search by Make:</h3>
      </button>
      <button onClick={() => setActiveComponent('searchMake&Model')}>
        <h3>Search by Make and Model:</h3>
      </button>
      <button onClick={() => setActiveComponent('searchMake&Model&Year')}>
        <h3>Search by Make, Model and Year:</h3>
      </button>
      <button onClick={() => setActiveComponent('searchId')}>
        <h3>Search by ID:</h3>
      </button>
        {activeComponent === 'searchMake&Model&Year' && 
        <SearchByMakeModelYear name='searchMake&Model&Year'
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
        {activeComponent === 'searchMake' && 
        <SearchByMake name='searchMake'
        make={make}
        setMake={setMake}
        car={car}
        setCar={setCar}
        setActiveResults={setActiveResults}
        />}
        {activeComponent === 'searchMake&Model' && 
        <SearchByMakeModel name='searchMake&Model'
        make={make}
        setMake={setMake}
        model={model}
        setModel={setModel}
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
