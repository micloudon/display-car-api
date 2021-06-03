const Results = ({car}) => {

  return(
<div>
    <h3 className="pageText">Results Found: {car.length}</h3>
        <table className="resultsTable">
        
          <th className="resultsTd">Make</th> <th className="resultsTd">Model</th> <th className="resultsTd">Year</th> 
          <th className="resultsTd">HorsePower</th> <th className="resultsTd">fuelType</th> <th className="resultsTd">Cylinders</th>
          <th className="resultsTd">driveTrain</th> <th className="resultsTd">Number of Doors</th> 
          <th className="resultsTd">Size</th> <th className="resultsTd">Style</th> <th className="resultsTd">Highway MPG</th>
          <th className="resultsTd">City MPG</th> <th className="resultsTd">MSRP</th>
          {car.length > 1 ?
          car.map((c) => (
          <tr>
            <td className="resultsTd">{c.make}</td> <td className="resultsTd">{c.model}</td> <td className="resultsTd">{c.year}</td> 
            <td className="resultsTd">{c.horsePower}</td>
            <td className="resultsTd">{c.fuelType}</td> <td className="resultsTd">{c.cylinders}</td>
            <td className="resultsTd">{c.driveTrain}</td>
            <td className="resultsTd">{c.numDoors}</td> <td className="resultsTd">{c.size}</td> 
            <td className="resultsTd">{c.style}</td> <td className="resultsTd">{c.highwayMpg}</td>
            <td className="resultsTd">{c.cityMpg}</td> <td className="resultsTd">{c.msrp}</td>
            
          </tr>
          
          ))

          
            :
            <tr>
            <td>{car.make}</td> <td>{car.model}</td> <td>{car.year}</td> <td>{car.horsePower}</td>
            <td>{car.fuelType}</td> <td>{car.cylinders}</td> <td>{car.driveTrain}</td>
            <td>{car.numDoors}</td> <td>{car.size}</td> <td>{car.style}</td> <td>{car.highwayMpg}</td>
            <td>{car.cityMpg}</td> <td>{car.msrp}</td>
          </tr>
          }
    </table>
        
</div>
  )
}

export default Results;