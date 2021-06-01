import React from 'react'

const SearchByName = () => {

return(
    <form>
        <h3>Find by make, model and year:</h3>

        <table>
            <tr>
            <td align="right">Make:</td>
            <td align="left"><input id="make" className="searchByName" type='text'></input></td>
            </tr>
            <tr>
            <td align="right">Model:</td>
            <td align="left"><input id="make" className="searchByName" type='text'></input></td>
            </tr>
            <tr>
            <td align="right">Year:</td>
            <td align="left"><input id="year" className="searchByName" type='text'></input></td>
            </tr>
    </table>


    </form>
)}

export default SearchByName;