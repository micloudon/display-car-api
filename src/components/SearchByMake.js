import React from 'react'

const SearchByMake = ({make, setMake, car, setCar, setActiveResults}) => {

    const urlBase  = 'http://ec2-54-245-43-7.us-west-2.compute.amazonaws.com/api/';

    const inputMakeHandler = (e) => {
        setMake(e.target.value);
        
      };

      const showCars = () => {
        const regex = /[a-zA-Z]/; 
        if(regex.test(make) === true) {
          fetch(urlBase+make, { credentials: 'include'})
        .then(res => {
          return res.json()
        })
        .then((data) => {
          setCar(data)
        })
        setActiveResults('Results');
        }
        else {
          alert("entry must contain letters")
        }
      }



return(
    <div>
    {/* // <form> */}
        <h2 className="pageText">Find by make:</h2>

        <table className="searchTable">
            <tr>
            <th align="right">Make:</th>
            <td align="left"><input onChange={inputMakeHandler} id="make" className="searchByName" type='text'
            placeholder="Enter a Make"></input></td>
            </tr>
            <tr>
            <td align="right"></td>
            <td className="left"><button className="searchBtn" onClick={showCars}><strong>Submit</strong></button></td>
            </tr>
    </table>


    {/* // </form> */}
    </div>
)}

export default SearchByMake;