import React from 'react'
import SelectLocationScooty from './SelectLocationScooty';
const BookScooty = ({ match, location }) => {
    const { params: { itemId } } = match;
    var Scooty=[
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
            rent:"₹10/Km"
        }

    ]
  
    return (
      <>
     <div style={{marginLeft:"750px",marginTop:"150px"}}>
     <img src={Scooty[itemId-1].imgUrl} style={{width:"400px",height:"300px",marginLeft:"-50px"}}></img>
     <p style={{marginLeft:"130px",fontWeight:"bold"}}> {Scooty[itemId - 1].name}</p>
     <p style={{marginLeft:"140px",fontWeight:"bold"}}> {Scooty[itemId - 1].rent}</p>
    </div>
     <SelectLocationScooty />
      </>
    );
  };
export default BookScooty;