import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navbars from "./../../components/navbar";
import Empty from "./../../Assets/Group 491.png";
import './style.css'
import TopRateProducts from './../../components/topRateProducts';
import Line from "../../components/line";
import RateProducts from './../../components/topRateProductsItem/index';

const EmptyCart = () => {
  return (
    <>
      <Navbars />
      <Container className='empty-cart-section'>
        <Row className="pt-5 pb-5">
          <p>Back / Shopping Cart</p>
          <Col className="d-flex flex-column align-items-center justify-content-center empty-cart">
            <h1>Your shopping cart is empty</h1>
            <Image src={Empty} alt="empty cart" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Line
              title={"recently viewed"}
              className={"line"}
              position={"left"}
            />
          </Col>
        </Row>
        <Row>
          <RateProducts />
        </Row>
      </Container>
    </>
  );
};

export default EmptyCart;
