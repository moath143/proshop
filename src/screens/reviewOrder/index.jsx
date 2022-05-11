import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navbars from "../../components/navbar";
import OrderDetails from "../../components/orderDetails";
import Steps from "../../components/steps";
import Subtotal from "../../components/subtotal";
import "./style.css";
import Buttons from "../../components/button";
import { Link } from "react-router-dom";

const Visa = "https://proshop.101bloom.com/Assets/visa.PNG";
const ReviewOrder = () => {
  return (
    <>
      <Navbars />
      <Container className="pt-5 pb-5 review">
        <Steps />
        <Row className="pt-5 pb-5">
          <Col md={8}>
            <div className="address">
              <div className="info-address">
                <h3>Shipping Address</h3>
                <p>John rose</p>
                <p>56051 Jones Falls, Philippines,</p>
                <p>Turkey - 62502</p>
              </div>
              <OrderDetails />
              <div className="order mt-5 d-flex justify-content-between align-items-center">
                <h2>Order Details</h2>
                <p>Change</p>
              </div>
              <div className="visa">
                <Image src={Visa} alt="visa" />
                *****1245
              </div>
            </div>
          </Col>
          <Col md={4}>
            <Subtotal />
            <Link to="/payment-success">
              <Buttons className="review-btn" title={"place order"} />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ReviewOrder;
