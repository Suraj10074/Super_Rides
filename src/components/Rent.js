import React from 'react'
import Rentcar from './Rentcar';
import Rentbike from './Rentbike';
import RentScooty from './RentScooty';
import Footer from './Footer'
class Rent extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
            <Rentcar />
            <Rentbike/>
            <RentScooty/>
            <div style={{clear:"both"}}>
            <Footer/>
            </div>
          
            </div>
        );

    }
}
export default Rent;