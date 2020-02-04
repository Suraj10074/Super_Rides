import React from 'react'
import { Link } from "react-router-dom";
import VehicleTitle from './VehicleTitle';
class Rentbike extends React.Component{
    constructor(){
        super();
    this.state={
        Bike:[
            {
                name:"TVS Apache",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/tvs/apache-rtr-200-4v/tvs-apache-rtr-200-4v-black.png?v=1",
                rent:"₹15/Km"
            },
            {
                name:"Bajaj Pulsar NS200",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
                rent:"₹15/Km"
            },
            {
                name:"Yamaha YZF",
                imgUrl:"https://imgd.aeplcdn.com/1280x720/bw/ec/36469/Yamaha-YZF-R3-Action-138042.jpg?wm=0",
                rent:"₹15/Km"
            },
            {
                name:"TVS Apache",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/tvs/apache-rtr-200-4v/tvs-apache-rtr-200-4v-black.png?v=1",
                rent:"₹15/Km"
            },
            {
                name:"Bajaj Pulsar NS200",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
                rent:"₹15/Km"
            },
            {
                name:"Yamaha YZF",
                imgUrl:"https://imgd.aeplcdn.com/1280x720/bw/ec/36469/Yamaha-YZF-R3-Action-138042.jpg?wm=0",
                rent:"₹15/Km"
            },{
                name:"TVS Apache",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/tvs/apache-rtr-200-4v/tvs-apache-rtr-200-4v-black.png?v=1",
                rent:"₹15/Km"
            },
            {
                name:"Bajaj Pulsar NS200",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
                rent:"₹15/Km"
            },
            {
                name:"Yamaha YZF",
                imgUrl:"https://imgd.aeplcdn.com/1280x720/bw/ec/36469/Yamaha-YZF-R3-Action-138042.jpg?wm=0",
                rent:"₹15/Km"
            },
            {
                name:"Bajaj Pulsar NS200",
                imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
                rent:"₹15/Km"
            }
        ]
    }
    }
    
    render(){
        return(
            <div style={{float:"left",clear:"both"}}>
                <div>
                    <VehicleTitle bg="grey" vname="Bike"/>
                </div>
            {
              this.state.Bike.map((items,index)=> {
                return (
                <div style={{float:"left"}}>
                   <div className="card" style={{ width: "300px", marginLeft: "110px",marginBottom:"20px"}}>
                    <img src={items.imgUrl} style={{ width: "280px", height: "200px" }}></img>
                    <hr></hr>
                    <p style={{ textAlign: "center" }}>{items.name}</p>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>{items.rent}</p>
                    <Link to={`/bookBike/${index + 1}`}><button className="btn btn-warning" style={{width:"100%"}} >BOOK</button></Link>       
                </div>      
                </div>
                )
              })
            }
          </div>
            );
    }
}
export default Rentbike;