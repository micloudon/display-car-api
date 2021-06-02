import React from 'react'

const SearchByMakeModelYear = ({make, setMake, model, setModel, year, setYear, car, setCar, setActiveResults}) => {

    const urlBase  = 'http://ec2-54-245-43-7.us-west-2.compute.amazonaws.com/api/';

    const inputMakeHandler = (e) => {
        setMake(e.target.value);
      };

      const inputModelHandler = (e) => {
        setModel(e.target.value);
      };

      const inputYearHandler = (e) => {
        setYear(e.target.value);
      };

      const showCars = () => {
        fetch(urlBase+make+'/'+model+'/'+year, { credentials: 'include'})
        .then(res => {
          return res.json()
        })
        .then((data) => {
          setCar(data)
        })
        setActiveResults('Results');
      }

    console.log(car.length);


return(
    <div>
    {/* // <form> */}
        <h3>Find by make, model and year:</h3>

        <table>
            <tr>
            <td align="right">Make:</td>
            <td align="left"><input onChange={inputMakeHandler} id="make" className="searchByName" type='text'></input></td>
            </tr>
            <tr>
            <td align="right">Model:</td>
            <td align="left"><input onChange={inputModelHandler} id="make" className="searchByName" type='text'></input></td>
            </tr>
            <tr>
            <td align="right">Year:</td>
            <td align="left"><input onChange={inputYearHandler} id="year" className="searchByName" type='text'></input></td>
            </tr>
            <tr>
            <td align="right"></td>
            <td className="left"><input onClick={showCars} type="submit" value="Submit" /></td>
            </tr>
    </table>


    {/* // </form> */}
    </div>
)}

export default SearchByMakeModelYear;