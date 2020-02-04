import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
<div>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{height: "700px"}}>
      <div class="carousel-item active">
        <img style={{height: "700px"}} class="d-block w-100" src="pexels-photo-1429748 (1).jpeg" alt="First slide" />
        <div class="carousel-caption d-none d-lg-block text-light font-weight-bolder">
        <h3>About Super Rides</h3>
        <h5>
        About Super Rides Super rides is a Self drive car and bike rental startup. Super rides was founded in the year 2019 and is now the largest car and bike rental provider in North East India. Each piece is conceptualized and hand-crafted with love by a small team in Bengaluru, led by founder Suraj Singh. Super Rides is operational in Guwahati, Chandigarh and Pune.You can enjoy Super Rides services to explore North east India such as Kaziranga, Majuli, Shillong, Cherrapunji, Tawang, Nagaland and Manipur. In the North you can explore Leh, Ladakh, Shimla, Manali, Spiti Valley and Mos
        </h5>
      </div>
    </div>

    <div class="carousel-item">
        <img  style={{height: "700px"}} class="d-block w-100" src="pexels-photo-2921655.jpeg" alt="Third slide" />
        <div class="carousel-caption d-none d-lg-block text-light font-weight-bolder">
        <h3>The Super Rides</h3>
        <h5>
        Super Rides is a self driven car and motorcycle provider Rental company in Guwahati, Pune and Chandigarh in India. We offer cars and bikes without any security money for unlimited kms. Hassle free and easy way you can hire a self driven vehicle and explore the beautiful places of North east of India, North india and south india.
        </h5>
      </div>
    </div>

    <div class="carousel-item">
        <img  style={{height: "700px"}} class="d-block w-100" src="pexels-photo-2174656.jpeg" alt="Third slide" />
        <div class="carousel-caption d-none d-lg-block">
        <Link to="/rent"><button className="btn btn-warning">Rent by hour, day or week as you desire.</button></Link>
      </div>
    </div>

  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div style={{clear:"both"}} >
    <Footer />
    </div>
</div>
    )
}

export default Contact;