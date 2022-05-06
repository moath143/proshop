import React from "react";
import Navbars from "./../../components/navbar";
import { Container, Row, Col, Image } from "react-bootstrap";
import Buttons from "../../components/button";
import Iphone from "../../Assets/img14.png";
import Airpod from "../../Assets/img15.png";
import Playsation from "../../Assets/img16.png";
import "./style.css";

const Cart = () => {
  return (
    <>
      <Navbars />
      <Container>
        <Row className="pt-5 pb-5">
          <p>Back / Shopping Cart</p>
          <Col sm={8}>
            <div className="cart-item">
              <Buttons
                className="cross"
                icon={<i className="fa-solid fa-xmark"></i>}
              />
              <div className="cart-item-image">
                <Image src={Iphone} alt="iphone" thumbnail={true} />
              </div>
              <h3>Apple iPhone 11 Pro 256GB Memory</h3>
              <div className="count-item">
                <Buttons icon={<i className="fa-solid fa-minus"></i>} />
                <p>1</p>
                <Buttons icon={<i className="fa-solid fa-plus"></i>} />
              </div>
              <div className="price-item">
                <h1>499.99$</h1>
              </div>
            </div>
            <div className="cart-item">
              <Buttons
                className="cross"
                icon={<i className="fa-solid fa-xmark"></i>}
              />
              <div className="cart-item-image">
                <Image src={Airpod} alt="iphone" thumbnail={true} />
              </div>
              <h3>Apple Airpods Wireless Bluetooth Headset</h3>
              <div className="count-item">
                <Buttons icon={<i className="fa-solid fa-minus"></i>} />
                <p>1</p>
                <Buttons icon={<i className="fa-solid fa-plus"></i>} />
              </div>
              <div className="price-item">
                <h1>499.99$</h1>
              </div>
            </div>
            <div className="cart-item">
              <Buttons
                className="cross"
                icon={<i className="fa-solid fa-xmark"></i>}
              />
              <div className="cart-item-image">
                <Image src={Playsation} alt="iphone" thumbnail={true} />
              </div>
              <h3>Sony Playstation 4 Pro White Version</h3>
              <div className="count-item">
                <Buttons icon={<i className="fa-solid fa-minus"></i>} />
                <p>1</p>
                <Buttons icon={<i className="fa-solid fa-plus"></i>} />
              </div>
              <div className="price-item">
                <h1>499.99$</h1>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="cart-total">
              <h3>Subtotal (3) items</h3>
              <p>999.97$</p>
              <h1>989.97$</h1>
              <hr />
              <Buttons className="proceed" title={"Proceed to Checkout"} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
