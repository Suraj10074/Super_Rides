import React from 'react'
import {Link} from 'react-router-dom'
import VehicleTitle from './VehicleTitle';
class Rentcar extends React.Component{
    constructor(props){
        super(props);
    this.state={
        Car:[
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹60/Km",
            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹60/Km",
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹60/Km",
            },
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹60/Km"

            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹60/Km"
                
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹60/Km"
                
            },
            {
                name:"Maruti Suzuki",
                imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfGg935oEr6Jg61BlITRwwomM3NfenU016R4CpYn9soWYew5T7A",
                rent:"₹60/Km"
                
            },
            {
                name:"Maruti Dzire",
                imgUrl:"https://media.zigcdn.com/media/model/2017/May/dire_320x160.jpg",
                rent:"₹60/Km"
                
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹60/Km"
                
            },
            {
                name:"Maruti Ertiga",
                imgUrl:"http://im.rediff.com/money/2019/aug/08ertiga.jpg",
                rent:"₹60/Km"
            }
        ]
    }
    }
    render(){
        return(
        <div style={{float:"left"}}>
            <div>
                <VehicleTitle bg="grey" vname="Car"/>
            </div>
        {
          this.state.Car.map((items,index) => {
            return (
                <div style={{float:"left"}}>
                <div className="card" style={{ width: "300px", marginLeft: "110px",marginBottom:"20px"}}>
                 <img src={items.imgUrl} style={{ width: "280px", height: "200px" }}></img>
                 <hr></hr>
                 <p style={{ textAlign: "center" }}>{items.name}</p>
                 <p style={{ textAlign: "center", fontWeight: "bold" }}>{items.rent}</p>
                 <Link to={`/bookCar/${index + 1}`}><button className="btn btn-warning" style={{width:"100%"}} >BOOK</button></Link>       
             </div>      
             </div>
            )
          })
        }
      </div>
        );
    }
}
export default Rentcar;