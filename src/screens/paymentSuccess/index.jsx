import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Navbars from "./../../components/navbar";
import { Link } from "react-router-dom";
import Buttons from "../../components/button";
import Line from "../../components/line";
import RateProducts from "../../components/topRateProductsItem";

const PaymentSuccess = () => {
  return (
    <>
      <Navbars />
      <Container className="payment-success">
        <Row className="mt-5">
          <Col md={12} className="success">
            <h1>Payment Success !</h1>
            <div className="info">
              <p>
                order number <span>65AS1D56ASD156DS</span>{" "}
              </p>
              <p>
                shipping address{" "}
                <span>56051 Jones Falls, Philippines, Turkey - 62502</span>{" "}
              </p>
              <p>
                order items
                <span>
                  1X iPhone 11 Pro 256GB Memory, 1X Apple Airpods Wireless
                  Blutooth Headset
                </span>
              </p>
            </div>
            <p>
              An email will be sent to your email address contains order
              confirmation and tacking code.
            </p>
          </Col>
          <Col md={3} className="offset-md-9 mt-5 mb-5">
            <div className="success-btn">
              <Link to="/">
                <Buttons className='keep-shopping' title={"Keep Shopping"} />
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Line
              title={"recently viewed"}
              className={"line center"}
              position={"center"}
            />
          </Col>
        </Row>
        <Row className="mb-5">
          <RateProducts />
        </Row>
      </Container>
    </>
  );
};

export default PaymentSuccess;
