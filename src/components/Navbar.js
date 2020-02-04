import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
  return (
    <div>
      <nav className="nav fixed-top mt-3 bg-dark" style={{height:"70px"}}>
        <Link className="nav-item nav-link text-warning font-weight-bolder" to="/"> <h1 style={{ marginLeft: "20px", marginRight: "10px",fontSize: "30px",marginTop:"-10px" }}><span><img src="20170602061218-45109.png" style={{height:"70px",width:"100px"}}></img>Super Rides</span></h1></Link>
        <Link className="nav-item nav-link text-warning mt-3" style={{ fontSize: "15px",marginLeft:"10px" }} to="/features">FEATURES</Link>
        <Link className="nav-item nav-link text-warning mt-3" style={{ fontSize: "15px" }} to="/pricing">PRICING</Link>
        <Link className="nav-item nav-link text-warning mt-3" style={{ fontSize: "15px" }} to="/rent">BOOK</Link>
        <Link className="nav-item nav-link text-warning mt-3" style={{ fontSize: "15px" }} to="/contact">CONTACT</Link>
        <Link className="nav-item nav-link text-warning mt-3" style={{ fontSize: "15px",border:"1px solid white",height:"35px",borderRadius:"5px"}} to="/trail">1 DAY TRAIL</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"40px" }} to="/adminlog"><span><img src="https://icon-library.net/images/admin-login-icon/admin-login-icon-11.jpg" style={{color:"black" ,height:"35px"}}></img></span>ADMIN LOGIN</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"10px" }} to="/login"><span><img src="http://img.clipartlook.com/user-user-clipart-528_594.png" style={{color:"black" ,height:"35px"}}></img></span>LOG IN</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"10px" }} to="/signup"><span><img src="http://keapu-webpp01-centin-r46j07o2.cloudapp.net/PU-LECT-2019/images/user_add.png" style={{color:"white" ,height:"35px"}}></img></span>SIGN UP</Link>
        <img src="https://www.vippng.com/png/full/0-476_youtube-bell-icon-png-bell-icon-png-hd.png" style={{width:"20px", height:"25px",marginLeft:"10px",marginTop:"24px"}}></img>
      </nav>
    </div>
  )
    ;
};
export default Navbar;  