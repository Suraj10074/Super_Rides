import React from 'react'
import SelectLocationCar from './SelectLocationCar';
const BookCar = ({ match, location }) => {
    const { params: { itemId } } = match;
    var Car=[
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
    
  
    return (
      <>
     <div style={{marginLeft:"750px",marginTop:"150px"}}>
     <img src={Car[itemId-1].imgUrl} style={{width:"400px",height:"300px",marginLeft:"-50px"}}></img>
     <p style={{marginLeft:"130px",fontWeight:"bold"}}> {Car[itemId - 1].name}</p>
     <p style={{marginLeft:"140px",fontWeight:"bold"}}> {Car[itemId - 1].rent}</p>
    </div>
    <SelectLocationCar />
    </>
    );
  };
  export default BookCar;

    
  


