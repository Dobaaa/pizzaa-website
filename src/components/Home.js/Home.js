import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import pride from "../../assets/pride-pizza.jpg";
import Shape from "../../assets/Types-of-Pizza-removebg-preview (1).png";
import Data from "../../Data";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../assets/slider1.jpg";
import Slider2 from "../../assets/slider2.jpg";
import Slider3 from "../../assets/slider3.jpg";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CountUp from "react-countup";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const blogitem = Data.map((item) => {
    return (
      <div className="col-md-4">
        <div className="box mt-5">
          <img src={item.img} />
          <h5> {item.title}</h5>
          <span> {item.time}</span>
          <h6> {item.price}</h6>
        </div>
        <>
          <Button className="popup" variant="primary" onClick={handleShow}>
            Order Now
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> Order Now</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row className="pb-3">
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Description</Form.Label>
                  <Form.Control placeholder="Tell us your specific Order" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Area</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>class</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Size</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group
                  className="pb-3"
                  style={{ width: "30%" }}
                  as={Col}
                  controlId="formGridZip"
                >
                  <Form.Label>Phone</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Order
                </Button>
              </Form>{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Order
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  });
  return (
    <Fragment>
      <Header />
      <section className="number ">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>
                <CountUp start={0} end={1287} duration={2} delay={0} />+
              </h2>
              <h5>SAVINGS</h5>
            </div>
            <div className="col-md-3">
              <h2>
                <CountUp start={0} end={5786} duration={2} delay={0} />+
              </h2>
              <h5>PHOTOS</h5>
            </div>
            <div className="col-md-3">
              <h2>
                {" "}
                <CountUp start={0} end={1440} duration={2} delay={0} />+
              </h2>
              <h5>ROCKETS</h5>
            </div>
            <div className="col-md-3">
              <h2>
                <CountUp start={0} end={7110} duration={2} delay={0} />+
              </h2>
              <h5>GLOBES</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="pride pb-5">
        <div className="Container">
          <div className="row text-center">
            <div className="col-md-6">
              <ScrollAnimation animateIn="bounceInLeft">
                <img src={pride} title="Pride" className="pentola" />
              </ScrollAnimation>
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus
              </p>
              <button>
                <a href="#"> Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ingredients pt-5 pb-5">
          <div className="container  ">
            <div className="row d-flex align-items-center   ">
              <div className="col-md-6">
                <h2>
                  We make everything by hand with the best possible ingredients.
                </h2>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts.
                </p>
                <ul className="text-start p-0 mt-5">
                  <li>Etiam sed dolor ac diam volutpat.</li>
                  <li>Etiam sed dolor ac diam volutpat.</li>
                  <li>Etiam sed dolor ac diam volutpat.</li>
                </ul>
                <button>
                  <a href="#"> Learn More</a>
                </button>
              </div>

              <div className="col-md-6">
                <ScrollAnimation animateIn="bounceInRight">
                  {" "}
                  <img src={Shape} title="Shape" />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="story pt-5 pb-5">
          <div className="over-lay"></div>
          <div className="continer  text-center">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h2 className="mt-4">
                  When a man's stomach is full it makes no <br /> difference
                  whether he is rich or poor.
                </h2>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.
                </p>
                <a href="#">Watch Our Story</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs  pt-5 m-5">
        <div className="container">
          <div className="row text-center">
            <div className=" col-lg-12 col-md-12">
              <h2>Explore Our Foods</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus. Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
          </div>
          <div className="row ">{blogitem}</div>
        </div>
      </section>

      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Reviews</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <img src={Slider1} />
                  <Carousel.Caption>
                    <h5>Amr Abd Elmaksoud</h5>
                    <p>
                      I like pentola too much. even my friends called me as a
                      pentilian citizen Lovely place .. lovely face .. not just
                      a cafe
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Slider2} />
                  <Carousel.Caption>
                    <h5>Adam Kelany</h5>
                    <p>
                      مكان جميل جدا و ال staff لطيف و friendly و كمان اسعاره
                      كويسة و المكان كله مكيف
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Slider3} />
                  <Carousel.Caption>
                    <h5>Mariam Salem</h5>
                    <p>
                      Best coffee · Free Wi-Fi · Fresh smoothies · Best iced
                      coffee · Delicious pastries · Relaxing atmosphere.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="Questions mt-5 pt-5 pb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 col-lg-12">
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 text-start">
              <div className="fisrt-ques pt-5 pb-5">
                <h4 className="text-start">
                  Is Foodera Bread really baked fresh each day?
                </h4>
                <p className="text-start">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
              <div className="fisrt-ques">
                <h4> Is Foodera Bread really baked fresh each day?</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-start">
              <div className="fisrt-ques pt-5 pb-5">
                <h4> Is Foodera Bread really baked fresh each day?</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
              <div className="fisrt-ques">
                <h4> Is Foodera Bread really baked fresh each day?</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="talabat  d-flex align-items-center ">
        <div className="over-lay"></div>

        <div className="container ">
          <div className="row text-center ">
            <div className="col-md-12 col-mg-12">
              <h3>Order Now Pentola Food Online From Talabat Egypt</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="Subscribe pt-5 mt-5 pb-5 ">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 col-lg-12">
              <h2>
                Hurry up! Subscribe our newsletter <br /> and get 25% Off
              </h2>
              <p>Limited time offer for this month. No credit card required.</p>
              <div className="row  d-flex align-items-center">
                <div className="col-md-8 ">
                  <input
                    type="email"
                    class="e-mail  "
                    placeholder="Email Address here"
                    name="email"
                    data-validate="validate(required, email)"
                    id="eaddress"
                  ></input>
                </div>
                <div className="col-md-4">
                  <button type="submit">Subscribe </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
