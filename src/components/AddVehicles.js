import React, { Component } from 'react'
import { Link } from "react-router-dom";
class AddVehicles extends Component {
  render() {
    return (
      <div style={{marginTop:"150px",marginLeft:"300px"}}>
        <h1 className="offset-4 mb-5">WELCOME ADMIN </h1>
       <Link to="/AddCar"><button className="btn btn-primary ml-5" style={{width:"200px"}}>ADD CAR</button></Link> 
        <Link to="/AddBike"><button className="btn btn-secondary ml-5" style={{width:"200px"}}>ADD BIKE</button></Link>
        <Link to="/AddScooty"><button className="btn btn-danger ml-5" style={{width:"200px"}}>ADD SCOOTY</button></Link>
        <Link to="/ShowBookDetails"><button className="btn btn-warning ml-5" style={{width:"200px"}}>SHOW BOOK DETAILS</button></Link>
        <Link to="/"><button className="btn btn-success ml-5" style={{width:"200px"}}>LOG OUT</button></Link>
      </div>
    )
  }
}
export default AddVehicles;
