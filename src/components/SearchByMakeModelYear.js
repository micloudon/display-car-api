import React from 'react'

const SearchByMakeModelYear = ({make, setMake, model, setModel, year, setYear, car, setCar, setActiveResults, setLoading}) => {

    const urlBase  = `https://lgepkgyk2e.execute-api.us-west-2.amazonaws.com/InitStage/makemodelyear/?carMake=${make}&carModel=${model}&carYear=${year}`;

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
        setLoading(true)
        const regex = /[a-zA-Z]/;
        if(regex.test(make) || regex.test(model)) {
        fetch(urlBase, {})
        .then(res => {
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
          alert("entry Invalid")
        }
      }




return(
    <div>
        <h2 className="pageText">Find by make, model and year:</h2>

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
            <th align="right">Year:</th>
            <td align="left"><input onChange={inputYearHandler} id="year" className="searchByName" type='text'
            placeholder="Enter a Year"></input></td>
            </tr>
            <tr>
            <td align="right"></td>
            <td className="left"><button className="searchBtn" onClick={showCars}><strong>Submit</strong></button></td>
            </tr>
    </table>

    </div>
)}

export default SearchByMakeModelYear;