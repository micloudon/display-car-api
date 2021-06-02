const Results = ({car}) => {

  return(
    <table>
          <th>Make</th> <th>Model</th> <th>Year</th> <th>HorsePower</th> <th>fuelType</th> <th>Cylinders</th>
          <th>driveTrain</th> <th>Number of Doors</th> <th>Size</th> <th>Style</th> <th>Highway MPG</th>
          <th>City MPG</th> <th>MSRP</th>
          <tr>
            <td>{car.make}</td> <td>{car.model}</td> <td>{car.year}</td> <td>{car.horsePower}</td>
            <td>{car.fuelType}</td> <td>{car.cylinders}</td> <td>{car.driveTrain}</td>
            <td>{car.numDoors}</td> <td>{car.size}</td> <td>{car.style}</td> <td>{car.highwayMpg}</td>
            <td>{car.cityMpg}</td> <td>{car.msrp}</td>
          </tr>

    </table>
  )
}

export default Results;