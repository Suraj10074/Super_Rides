import React from 'react'
import './Signup.css';
function Signup() {
    return (
        <div>
            <div className="signup-form" style={{ marginTop: "100px" }}>
                <form>
                    <div><img src="http://keapu-webpp01-centin-r46j07o2.cloudapp.net/PU-LECT-2019/images/user_add.png" style={{ height: "60px", marginLeft: "120px" }}></img><span><h2 className="text-center">Sign Up</h2></span></div>

                    <p className="text-center">Please fill in this form to create an account!</p>
                    <hr></hr>
                    <div className="form-group ">
                        <div className="input-group ">
                            <span className="input-group-addon"><i class="fa fa-user"></i></span>
                            <input type="text" class="form-control" name="username" placeholder="Username" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                            <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input type="text" className="form-control" name="password" placeholder="Password" required="required" />
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                            <input type="text" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-lg offset-3">Sign Up</button>
                    </div>
                </form>
                <div className="text-center">Already have an account? <a href="./Login" className="text-danger">Login here</a></div>
            </div>
        </div>
    );
}
export default Signup;