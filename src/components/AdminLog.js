import React from 'react'
import './Login.css';
import { Link } from "react-router-dom";
const AdminLog = () => {
    return (
        <div>
            <div className="login-form" style={{ marginTop: "120px" }}>
                <form>
                    <img src="https://icon-library.net/images/admin-login-icon/admin-login-icon-11.jpg" style={{ height: "80px", marginLeft: "90px" }}></img>
                    <h2 className="text-center">Admin Log in</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group">
                       <Link to="/AddVehicle"><button type="submit" className="btn btn-primary btn-block">Log in</button></Link> 
                    </div>
                    <div className="clearfix">
                        <a href="#" className="offset-3">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AdminLog;
