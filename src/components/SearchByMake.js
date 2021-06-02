import React from 'react'

const SearchByMake = ({make, setMake, car, setCar, setActiveResults}) => {

    const urlBase  = 'http://ec2-54-245-43-7.us-west-2.compute.amazonaws.com/api/';

    const inputMakeHandler = (e) => {
        setMake(e.target.value);
      };

      const showCars = () => {
        fetch(urlBase+make, { credentials: 'include'})
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
            <td align="right"></td>
            <td className="left"><input onClick={showCars} type="submit" value="Submit" /></td>
            </tr>
    </table>


    {/* // </form> */}
    </div>
)}

export default SearchByMake;