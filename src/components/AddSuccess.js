import React, { Component } from 'react'
import { Link } from "react-router-dom";
class AddSuccess extends Component {
  render() {
    return (
      <div style={{marginTop:"150px",marginLeft:"650px"}}>
        <h1>Successfully Added</h1>
        <div className="ml-3" style={{color:"red",fontSize:"22px"}}>Want to Add more Vechicle</div>
        <Link to="/addVechile"><button className="btn btn-warning" style={{marginLeft:"105px"}}>Click here</button></Link>
      </div>
    )
  }
}
export default AddSuccess;
