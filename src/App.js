import './App.css';
import SearchByMakeModelYear from './components/SearchByMakeModelYear';
import SearchByMakeModel from './components/SearchByMakeModel';
import SearchByMake from './components/SearchByMake';
import SearchById from './components/SearchByid';
import Results from './components/Results';
import React, { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



function App() {
  const classes = useStyles();

const [activeComponent, setActiveComponent] = useState('searchMake&Model');
const [activeResults, setActiveResults] = useState('');
const [id, setId] = useState();
const [make, setMake] = useState('');
const [model, setModel] = useState('');
const [year, setYear] = useState('');
const [car, setCar] = useState([]);
const [buttonColorMake, setButtonColorMake] = useState('#91defa');
const [buttonColorMakeModel, setButtonColorMakeModel] = useState('#00639c');
const [buttonColorMakeModelYear, setButtonColorMakeModelYear] = useState('#91defa');
const [buttonColorId, setButtonColorId] = useState('#91defa');
const [textColorMake, setTextColorMake] = useState('black');
const [textColorMakeModel, setTextColorMakeModel] = useState('white');
const [textColorMakeModelYear, setTextColorMakeModelYear] = useState('black');
const [textColorId, setTextColorId] = useState('black');
const [pagCar, setPagCar] = useState(car.slice(0, car.length));
const [pageNumber, setPageNumber] = useState(0);
const [loading, setLoading] = useState(false);

const buttonClickMake = () => {
  setActiveComponent('searchMake')
  setButtonColorMake('#00639c')
  setButtonColorMakeModel('#91defa')
  setButtonColorMakeModelYear('#91defa')
  setButtonColorId('#91defa')
  setTextColorMake('white')
  setTextColorMakeModel('black')
  setTextColorMakeModelYear('black')
  setTextColorId('black')
}

const buttonClickMakeModel = () => {
  setActiveComponent('searchMake&Model')
  setButtonColorMakeModel('#00639c')
  setButtonColorMake('#91defa')
  setButtonColorMakeModelYear('#91defa')
  setButtonColorId('#91defa')
  setTextColorMake('black')
  setTextColorMakeModel('white')
  setTextColorMakeModelYear('black')
  setTextColorId('black')
}

const buttonClickMakeModelYear = () => {
  setActiveComponent('searchMake&Model&Year')
  setButtonColorMakeModel('#91defa')
  setButtonColorMake('#91defa')
  setButtonColorMakeModelYear('#00639c')
  setButtonColorId('#91defa')
  setTextColorMake('black')
  setTextColorMakeModel('black')
  setTextColorMakeModelYear('white')
  setTextColorId('black')
}

const buttonClickId = () => {
  setActiveComponent('searchId')
  setButtonColorMakeModel('#91defa')
  setButtonColorMake('#91defa')
  setButtonColorMakeModelYear('#91defa')
  setButtonColorId('#00639c')
  setTextColorMake('black')
  setTextColorMakeModel('black')
  setTextColorMakeModelYear('black')
  setTextColorId('white')
}

const makebtnStyle = {
  backgroundColor: buttonColorMake,
  color: textColorMake
}
const makeModelbtnStyle = {
  backgroundColor: buttonColorMakeModel,
  color: textColorMakeModel
}
const makeModelbtnStyleYear = {
  backgroundColor: buttonColorMakeModelYear,
  color: textColorMakeModelYear
}
const makebtnId = {
  backgroundColor: buttonColorId,
  color: textColorId
}


  return (
    <div className="App">
      <h1>Find Cars  </h1>
      <button style={makebtnStyle} className="navBtn" onClick={buttonClickMake}>
        <h2>Search by Make:</h2>
      </button>
      <button style={makeModelbtnStyle} className="navBtn" onClick={buttonClickMakeModel}>
        <h2>Search by Make and Model:</h2>
      </button>
      <button style={makeModelbtnStyleYear} className="navBtn" onClick={buttonClickMakeModelYear}>
        <h2>Search by Make, Model and Year:</h2>
      </button>
      <button style={makebtnId} className="navBtn" onClick={buttonClickId}>
        <h2>Search by ID:</h2>
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
        setLoading={setLoading}
        />}
        {activeComponent === 'searchMake' && 
        <SearchByMake name='searchMake'
        make={make}
        setMake={setMake}
        car={car}
        setCar={setCar}
        setActiveResults={setActiveResults}
        setLoading={setLoading}
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
        setLoading={setLoading}
        />}
        {activeComponent === 'searchId' &&  
        <SearchById
        id={id}
        setId={setId}
        car={car}
        setCar={setCar}
        setActiveResults={setActiveResults}
        setLoading={setLoading}
        name="searchById"
         
         />}
         { activeResults === 'Results' &&
          <Results
        name="results"
        car={car}
        pagCar={pagCar}
        setPagCar={setPagCar}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}/>  
         }
       {  loading === true &&
       <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      }
    </div>
  );
}

export default App;
