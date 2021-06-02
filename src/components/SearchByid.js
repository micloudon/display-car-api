import React, { useState, useEffect } from 'react';
// import Results from './Results';

const SearchById = ({id, setId, car, setCar, setActiveResults}) => {

const urlBase  = 'http://ec2-54-245-43-7.us-west-2.compute.amazonaws.com/api/';


const inputIdHandler = (e) => {
  setId(e.target.value);
  
};

const showCar = () => {
  fetch(urlBase+id, { credentials: 'include'})
  .then(res => {
    return res.json()
  })
  .then((data) => {
    setCar(data)
  })
  setActiveResults('Results');
}
console.log(car)

return(
    <div>
    {/* <form> */}
        <h3>Find by id:</h3>

        <table>
            <tr>
            <td align="right">id:</td>
            <td align="left"><input onChange={inputIdHandler} id="id" className="searchByName" type='number'></input></td>
            </tr>
            <tr>
            <td align="right"></td>
            <td className="left"><input onClick={showCar} type="submit" value="Submit" /></td>
            </tr>
        </table>

        

        {/* <table>
          <th>Make</th> <th>Model</th> <th>Year</th> <th>HorsePower</th> <th>fuelType</th> <th>Cylinders</th>
          <th>driveTrain</th> <th>Number of Doors</th> <th>Size</th> <th>Style</th> <th>Highway MPG</th>
          <th>City MPG</th> <th>MSRP</th>
          <tr>
            <td>{car.make}</td> <td>{car.model}</td> <td>{car.year}</td> <td>{car.horsePower}</td>
            <td>{car.fuelType}</td> <td>{car.cylinders}</td> <td>{car.driveTrain}</td>
            <td>{car.numDoors}</td> <td>{car.size}</td> <td> {car.style}</td> <td>{car.highwayMpg}</td>
            <td>{car.cityMpg}</td> <td>{car.msrp}</td>
          </tr>

        </table> */}
        
            {/* {car.make} {car.model}  {car.fuelType} {car.horsePower} {car.cylinders} {car.driveTrain} {car.numDoors} */}
            {/* {car.size} {car.style} {car.highwayMpg} {car.cityMpg} {car.msrp} */}
        
    

    {/* </form> */}
 </div>
)}

export default SearchById;