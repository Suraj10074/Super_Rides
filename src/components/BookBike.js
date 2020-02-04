import React from 'react'
import SelectLocationBike from './SelectLocationBike';
const BookBike = ({ match, location }) => {
    const { params: { itemId } } = match;
   var Bike=[
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
  
    return (
      <>
      <div style={{marginLeft:"750px",marginTop:"150px"}}>
     <img src={Bike[itemId-1].imgUrl} style={{width:"400px",height:"300px",marginLeft:"-50px"}}></img>
     <p style={{marginLeft:"130px",fontWeight:"bold"}}> {Bike[itemId - 1].name}</p>
     <p style={{marginLeft:"140px",fontWeight:"bold"}}> {Bike[itemId - 1].rent}</p>
    </div>
    <SelectLocationBike/>
      </>
    );
  };
export default BookBike;