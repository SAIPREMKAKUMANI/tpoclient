import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <div id="property-images" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          data-target="#property-images"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#property-images" data-slide-to="1" class=""></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="images/nitrr7.jpg" alt="slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="images/nitrr2.png" alt="slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#property-images"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#property-images"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
