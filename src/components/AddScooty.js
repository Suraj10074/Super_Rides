import React, { Component } from 'react'
import { Link } from "react-router-dom";
 class AddScooty extends Component {
  render() {
    return (
      <div style={{marginLeft:"700px",marginTop:"120px"}}>
        <h1 className="ml-5 mb-5">ADD SCOOTY</h1> 
        <form>
        <h5>Add Name</h5>
        <input type="text" className="form-control w-25 mb-4"></input>
        <h5>Add Image Link</h5>
        <input type="text" className="form-control w-25 mb-4"></input>
        <h5>Add Rent/Km</h5>
        <input type="text" className="form-control w-25 mb-4"></input>
        <Link to="/addSuccess"><button className="btn btn-warning w-25">ADD</button></Link>
        </form>
       
      </div>
    )
  }
}
export default AddScooty;
