import React from "react";
import { Route } from "react-router-dom";
import Home from './Home.js'
import Login from './Login.js'
import Signup from "./Signup.js";
import AdminLog from "./AdminLog.js";
import Pricing from "./Pricing.js";
import Rent from "./Rent.js";
import Trail2day from "./Trail2day.js";
import BookCar from "./BookCar.js";
import BookBike from "./BookBike.js";
import BookScooty from "./BookScooty.js";
import Contact from "./Contact.js";
import BookCarConfirmation from "./BookCarConfirmation.js";
import AddCar from "./AddCar.js";
import AddVehicles from "./AddVehicles.js";
import AddBike from "./AddBike.js";
import AddScooty from "./AddScooty.js";
import ShowBookDetails from "./ShowBookDetails.js";
import AddSuccess from "./AddSuccess.js";
const Routes = () => {
  return (
    <div>

      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/adminlog" component={AdminLog} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component ={Signup}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/trail" component={Trail2day}/>
        <Route path="/rent" component={Rent}/>
        <Route path="/bookCar/:itemId" component={BookCar}/>
        <Route path="/bookBike/:itemId" component={BookBike}/>
        <Route path="/bookScooty/:itemId" component={BookScooty}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/bookCarConfirmation" component={BookCarConfirmation}/>
        <Route path="/AddVehicle" component={AddVehicles}/>
        <Route path="/AddCar" component={AddCar}/>
        <Route path="/AddBike" component={AddBike}/>
        <Route path="/AddScooty" component={AddScooty}/>
        <Route path="/ShowBookDetails" component={ShowBookDetails}/>
        <Route path="/addSuccess" component={AddSuccess}/>
        <Route path="/addVechile" component={AddVehicles}/>
      </React.Fragment>
    </div>
  )
    ;
};
export default Routes;