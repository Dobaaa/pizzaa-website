import React, { Fragment } from "react";
import "./Footer.css";
function Footer() {
  return (
    <Fragment>
      <section className="Footer pt-5 mt-5 pb-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <ul>
                <li>
                  <a href="#"> Register</a>
                </li>
                <li>
                  <a href="#">Explore Food </a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
              <div className="items pb-3">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div className="copy-right">
                <span>© </span>2023.<span> Pentola</span>. Created by
                <span>
                  <a href="#"> Doba</a>
                </span>
                .
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Footer;
