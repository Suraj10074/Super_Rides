import React, { Component } from 'react'
import { Link } from "react-router-dom";
 class AddCar extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          carName:'',
          imgUrl:'',
          rent:'',
          carDetails:[
              {
                  car: "",
                  img: "",
                  rent: "",
              }
          ]
       }
     }
     handleChange=(event)=>{
        event.preventDefault();
         this.setState({[event.target.name]:event.target.value});
         console.log(this.state.carName,this.state.imgUrl,this.state.rent);
         

     }
     handleSubmit=(event)=>{
         event.preventDefault();
         this.setState({
            carDetails:[
                {
                    car:this.state.carName,
                    img:this.state.imgUrl,
                    rent:this.state.rent
                }      
            ]       
         })
        console.log(this.state.carDetails)
        localStorage.setItem("carDetails", JSON.stringify(this.state.carDetails));
     }
  render() {
    return (
      <div style={{marginLeft:"700px",marginTop:"120px"}}>
          <h1 className="ml-5 mb-5">ADD CAR</h1> 
        <form onSubmit={this.handleSubmit}>
        <h5>Add Name</h5>
        <input type="text" className="form-control w-25 mb-4" name="carName" value={this.state.carName} onChange={(e)=>this.handleChange(e)}></input>
        <h5>Add Image Link</h5>
        <input type="text" className="form-control w-25 mb-4" name="imgUrl" value={this.state.imgUrl} onChange={(e)=>this.handleChange(e)}></input>
        <h5>Add Rent/Km</h5>
        <input type="text" className="form-control w-25 mb-4" name="rent" value={this.state.rent} onChange={(e)=>this.handleChange(e)}></input>
        <button className="btn btn-warning w-25">ADD</button>
        </form>
       
      </div>
    )
  }
}
export default AddCar;
