import React from 'react'
import {Link} from 'react-router-dom'
import VehicleTitle from './VehicleTitle'
class RentScooty extends React.Component{
    constructor(){
        super();
    this.state={
        Scooty:[
            {
                name:"TVS Jupiter",
                imgUrl:"https://bd.gaadicdn.com/processedimages/tvs/tvs-scooty/640X309/v_scooty-pep-plus_gd.png",
                rent:"₹10/Km",
                scootyNo:"KA01A0098"
            },
            {
                name:"TVS Zest",
                imgUrl:"https://auto.ndtvimg.com/bike-images/big/tvs/scooty-zest-110/tvs-scooty-zest-110.jpg?v=24",
                rent:"₹10/Km",
                scootyNo:"KA01A0098"
            },
            {
                name:"TVS Jupiter",
                imgUrl:"https://bd.gaadicdn.com/processedimages/tvs/tvs-scooty/640X309/v_scooty-pep-plus_gd.png",
                rent:"₹10/Km",
                scootyNo:"KA01A0098"
            },
            {
                name:"TVS Zest",
                imgUrl:"https://auto.ndtvimg.com/bike-images/big/tvs/scooty-zest-110/tvs-scooty-zest-110.jpg?v=24",
                rent:"₹10/Km",
                scootyNo:"KA01A0098"
            },  {
                name:"TVS Jupiter",
                imgUrl:"https://bd.gaadicdn.com/processedimages/tvs/tvs-scooty/640X309/v_scooty-pep-plus_gd.png",
                rent:"₹10/Km",
                scootyNo:"KA01A0098"
            },
            {
                name:"TVS Zest",
                imgUrl:"https://auto.ndtvimg.com/bike-images/big/tvs/scooty-zest-110/tvs-scooty-zest-110.jpg?v=24",
                rent:"₹10/Km",
                scootyNo:"KA01A0098"
            },  {
                name:"TVS Jupiter",
                imgUrl:"https://bd.gaadicdn.com/processedimages/tvs/tvs-scooty/640X309/v_scooty-pep-plus_gd.png",
                rent:"₹10/Km",
                scootyNo:"KA01A0098"
            },
            {
                name:"TVS Zest",
                imgUrl:"https://auto.ndtvimg.com/bike-images/big/tvs/scooty-zest-110/tvs-scooty-zest-110.jpg?v=24",
                rent:"₹10/Km",
                scootyNo:"KA01A0098"
            },  {
                name:"TVS Jupiter",
                imgUrl:"https://bd.gaadicdn.com/processedimages/tvs/tvs-scooty/640X309/v_scooty-pep-plus_gd.png",
                rent:"₹10/Km",
                scootyNo:"KA01A0098"
            },
            {
                name:"TVS Zest",
                imgUrl:"https://auto.ndtvimg.com/bike-images/big/tvs/scooty-zest-110/tvs-scooty-zest-110.jpg?v=24",
                rent:"₹10/Km",
                scootyNo:"KA01A0098"
            }
    
        ]
    }
    }
    render(){
        return(
            <div style={{float:"left",clear:"both"}}>
                <div>
                    <VehicleTitle bg="grey" vname="Scooty"/>
                </div>
            {
              this.state.Scooty.map((items,index) => {
                return (
                    <div style={{float:"left"}}>
                    <div className="card" style={{ width: "300px", marginLeft: "110px",marginBottom:"20px"}}>
                     <img src={items.imgUrl} style={{ width: "280px", height: "200px" }}></img>
                     <hr></hr>
                     <p style={{ textAlign: "center" }}>{items.name}</p>
                     <p style={{ textAlign: "center", fontWeight: "bold" }}>{items.rent}</p>
                     <Link to={`/bookScooty/${index + 1}`}><button className="btn btn-warning" style={{width:"100%"}} >BOOK</button></Link>       
                 </div>      
                 </div>
                )
              })
            }
          </div>
            );
    }
}
export default RentScooty;