import React from "react";
import "./Header.css";
import pizza from "../../../src/assets/pizza-4.png";
import Pizzaa from "../../../src/assets/Layer-1.png";
function Header() {
  return (
    <header>
      <div className="container ">
        <div className="row ">
          <div className=" col-md-6  pt-5 info">
            <h2>Good food choices are good investments.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.
            </p>
            <button>Order Now</button>
            <button>Learn More</button>
            <img src={Pizzaa} title="Pizzaa" className="smallCircle" />
          </div>
          <div className="  col-md-6 test design">
            <img
              src={pizza}
              title="pizza"
              style={{ zIndex: 10000 }}
              className="PizzaOne"
            />
            <h1>Yummy Test Here</h1>
            <h3>
              40 <br /> EGP
            </h3>
            <button>Offer Now</button>
            <h1 className="main-title">Curry Chicken</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
