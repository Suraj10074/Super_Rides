import React from "react";
class Footer extends React.Component {
  constructor() {
    super();
}
render(){
    return(
         <div>
          <footer className="page-footer font-small pt-4" style={{ background: "#302F29" }}>
            <div className="container-fluid text-center text-white text-md-left">
              <div className="row">
                <hr className="clearfix w-100 d-md-none pb-3"></hr>

                <div className="col-md-2 mb-md-0 mb-3 text-center">
                  <h5>CUSTOMER CARE</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-white" href="#">Contact</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Shipping</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Customer Service</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Gift Voucher
                     </a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Discount Codes
                     </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-2 mb-md-0 mb-3 text-center">
                  <h5>INFORMATION</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-white" href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Policies</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Blog</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Collaborations</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 mb-md-0 mb-3 text-center">
                  <h5>LOCATION</h5>
                  <ul className="list-unstyled text-white">
                    <li>
                      <a className="text-white" href="#">Bengaluru</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Mumbai</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Singapore</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Kolkata</a>
                    </li>
                    <li>
                      <a className="text-white" href="#">Delhi</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-md-0 mb-3 text-center">
                  <h5>STAY CONNECTED</h5>
                  <img src="https://www.freeiconspng.com/uploads/logo-twitter-circle-png-transparent-image-1.png" className="border-round" style={{ width: "50px", height: "50px", float: "center"}}></img>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="border-round" style={{ width: "50px", height: "50px", float: "center", marginLeft: "10px"}}></img>
                  <img src="https://images.vexels.com/media/users/3/137399/isolated/preview/47c9900ae893cbed1e1599ab9c8bcb18-pinterest-icon-logo-by-vexels.png" className="border-round" style={{ width: "50px", height: "50px", float: "center", marginLeft: "10px"}}></img>
                  <div>
                    <h6 style={{ clear: "both", marginTop: "70px" }}>GET THE GOOD STUFF</h6>
                    <input style={{ background: "transparent", color: "white" }}></input>
                    <button style={{ marginLeft: "20px", background: "gray", border: "1px solid gray", color: "white" }}>SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ background: "whitesmoke" }}></hr>
            <div className="footer-copyright text-center py-3 text-white">© 2019 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/" className="text-white"> Super Rides</a>
            </div>
          </footer>
        </div>
    );
}
}
export default Footer;