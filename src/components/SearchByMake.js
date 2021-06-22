import React from 'react'

const SearchByMake = ({make, setMake, car, setCar, setActiveResults, setLoading}) => {

    const urlBase  = 'https://b29afoesc2.execute-api.us-west-2.amazonaws.com/InitStage/make?carMake=';

    const inputMakeHandler = (e) => {
        setMake(e.target.value);
        
      };

      const showCars = () => {
        setLoading(true)
        const regex = /[a-zA-Z]/; 
        if(regex.test(make) === true) {
          fetch(urlBase+make, {})
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then((data) => {
          setLoading(false)
          setCar(data)
        })
        setActiveResults('Results');
        }
        else {
          setLoading(false)
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