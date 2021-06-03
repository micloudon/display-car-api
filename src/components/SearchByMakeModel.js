import React from 'react'

const SearchByMakeModel = ({make, setMake, model, setModel, car, setCar, setActiveResults}) => {

    const urlBase  = 'http://ec2-54-245-43-7.us-west-2.compute.amazonaws.com/api/';

    const inputMakeHandler = (e) => {
        setMake(e.target.value);
      };

      const inputModelHandler = (e) => {
        setModel(e.target.value);
      };

     
      const showCars = () => {
        fetch(urlBase+make+'/'+model, { credentials: 'include'})
        .then(res => {
          return res.json()
        })
        .then((data) => {
          setCar(data)
        })
        setActiveResults('Results');
      }


return(
    <div>
        <h2 className="pageText">Find by make and model:</h2>

        <table className="searchTable">
            <tr>
            <th align="right">Make:</th>
            <td align="left"><input onChange={inputMakeHandler} id="make" className="searchByName" type='text'
            placeholder="Enter a Make"></input></td>
            </tr>
            <tr>
            <th align="right">Model:</th>
            <td align="left"><input onChange={inputModelHandler} id="make" className="searchByName" type='text'
            placeholder="Enter a Model"></input></td>
            </tr>
            
            <tr>
            <td align="right"></td>
            <td className="left"><button className="searchBtn" onClick={showCars}><strong>Submit</strong></button></td>
            </tr>
    </table>


    </div>
)}

export default SearchByMakeModel;