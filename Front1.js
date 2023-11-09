import React from "react";
import "./Front1Style.css";
import Girllap from "../assets/Girllap.png";
import home from "../assets/home.png";
import home1 from "../assets/home1.png";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

const Front1 = () => {
  return (
    <div className="Front">
      <div >
      <h1 className="horizontal-move">WELCOME TO THE NEEDIN SERVISES </h1>
      </div>
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" data-interval="100">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={Girllap} className="d-block w-100" alt="Girllap" />
      <div class="carousel-caption d-none d-md-block">
        <h5>BUDDU RESTURENT</h5>
        <p>NON-VEG & VEG ITEMS ARE AVAILAB 
              Contact:986788668
        </p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={home} className="d-block w-100" alt="home" />
      <div class="carousel-caption d-none d-md-block">
        <h5>MLP PANSHOP</h5>
        <p>ALL MOCKTAILS DRIKNKS ARE AVAILABLE </p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={home1} className="d-block w-100" alt="home1" />
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <div className="service">
    <div className="serv">
      {/* <img className="img2" src=""
      {   } alt=""/> */}
    </div>
    <div className="servies1">
      <p>HI, NEEEDIN USERS</p>
      <h1>Services</h1>
      <div>
        <Link to="/services"
        className="btn">Services</Link>
        <Link to="/images" className="btn btn-light">Images</Link>
      </div>
    </div>

  </div>
</div>
    </div>
  );
};

export default Front1;
