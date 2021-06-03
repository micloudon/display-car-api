import ReactPaginate from 'react-paginate';

const Results = ({car, pagCar, setPagCar, pageNumber, setPageNumber}) => {

  const carsPerPage = 10
  const pagesVisited = pageNumber * carsPerPage;
  const pageCount = Math.ceil(car.length / carsPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  // const displayCars = car
  // .slice(pagesVisited, pagesVisited + carsPerPage)
  // .map((c => {
  //   <tr>
  //   <td className="resultsTd">{c.make}</td> <td className="resultsTd">{c.model}</td> <td className="resultsTd">{c.year}</td> 
  //   <td className="resultsTd">{c.horsePower}</td>
  //   <td className="resultsTd">{c.fuelType}</td> <td className="resultsTd">{c.cylinders}</td>
  //   <td className="resultsTd">{c.driveTrain}</td>
  //   <td className="resultsTd">{c.numDoors}</td> <td className="resultsTd">{c.size}</td> 
  //   <td className="resultsTd">{c.style}</td> <td className="resultsTd">{c.highwayMpg}</td>
  //   <td className="resultsTd">{c.cityMpg}</td> <td className="resultsTd">{c.msrp}</td>
    
  // </tr>
  // }))
  return(
<div>
    <h3 className="pageText">Results Found: {car.length}</h3>
        <table className="resultsTable">
        <tr>
          <th>Make</th> <th>Model</th> <th>Year</th> 
          <th>HorsePower</th> <th>fuelType</th> <th>Cylinders</th>
          <th>driveTrain</th> <th>Number of Doors</th> 
          <th>Size</th> <th>Style</th> <th>Highway MPG</th>
          <th>City MPG</th> <th>MSRP</th>
        </tr>
          
          {/* {car.length > 1 ? */
          car
          .slice(pagesVisited, pagesVisited + carsPerPage)
          .map((c) => (
          <tr>
            <td>{c.make}</td> <td>{c.model.slice(0, 18)}</td> <td>{c.year}</td> 
            <td>{c.horsePower}</td>
            <td>{c.fuelType.slice(0, 18)}</td> <td>{c.cylinders}</td>
            <td>{c.driveTrain}</td>
            <td>{c.numDoors}</td> <td>{c.size}</td> 
            <td>{c.style}</td> <td>{c.highwayMpg}</td>
            <td>{c.cityMpg}</td> <td>{c.msrp}</td>
            
          </tr>
          
          ))

          
          //   :
          //   <tr>
          //   <td>{car.make}</td> <td>{car.model}</td> <td>{car.year}</td> <td>{car.horsePower}</td>
          //   <td>{car.fuelType}</td> <td>{car.cylinders}</td> <td>{car.driveTrain}</td>
          //   <td>{car.numDoors}</td> <td>{car.size}</td> <td>{car.style}</td> <td>{car.highwayMpg}</td>
          //   <td>{car.cityMpg}</td> <td>{car.msrp}</td>
          // </tr>
          }
    </table>

    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBtns"}
      previousLinkClassName= {'previousBtn'}
      nextLinkClassName={'nextBtn'}
      disabledClassName={'pagination'}
      activeClassName={'paginationActive'}
    />
        
</div>
  )
}

export default Results;