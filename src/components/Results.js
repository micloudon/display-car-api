const Results = ({car}) => {

  return(
<div>
    
    
        <table>
        
          <th>Make</th> <th>Model</th> <th>Year</th> <th>HorsePower</th> <th>fuelType</th> <th>Cylinders</th>
          <th>driveTrain</th> <th>Number of Doors</th> <th>Size</th> <th>Style</th> <th>Highway MPG</th>
          <th>City MPG</th> <th>MSRP</th>
          {car.length > 1 ?
          car.map((c) => (
          <tr>
            <td>{c.make}</td> <td>{c.model}</td> <td>{c.year}</td> <td>{c.horsePower}</td>
            <td>{c.fuelType}</td> <td>{c.cylinders}</td> <td>{c.driveTrain}</td>
            <td>{c.numDoors}</td> <td>{c.size}</td> <td>{c.style}</td> <td>{c.highwayMpg}</td>
            <td>{c.cityMpg}</td> <td>{c.msrp}</td>
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