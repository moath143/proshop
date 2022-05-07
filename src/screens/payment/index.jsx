import React from "react";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import "./style.css";
import Navbars from "./../../components/navbar/index";
import InputForm from "./../../components/inputForm/index";
import Buttons from './../../components/button/index';

const Payment = () => {
  return (
    <>
      <Navbars />
      <Container className="pt-5 pb-5 payment">
        <Row>
          <Col sm={12}>
            <h1>Review Order</h1>
          </Col>
          <Col sm={12} className="steps">
            <div className="step one">
              <span>1</span>
              <p>Shipping and Payment</p>
            </div>
            <div className="step line">
              <hr />
            </div>
            <div className="step two">
              <span>2</span>
              <p>Place an Order</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Form>
              <h2>Shipping Address</h2>
              <InputForm label={"Country"} type={"text"} />
              <InputForm label={"City"} type={"text"} />
              <InputForm label={"Zip Code"} type={"text"} />
              <InputForm label={"Street Address"} type={"text"} />
              <h2>Payment Details</h2>
              <InputForm label={"Name on Card"} type={"text"} />
              <InputForm label={"Card Number"} type={"text"} />
              <InputForm label={"Expiration Date"} type={"text"} />
              <InputForm label={"CVC"} type={"text"} />
            </Form>
          </Col>
          <Col md={4}>
            <div className="order-details">
              <div className="order">
                <h2>Order Details</h2>
                <p>Change</p>
              </div>
              <div className="product-details">
                <div className="product">
                  <Image src="https://via.placeholder.com/100" />
                  <div className="info">
                    <p>product name</p>
                    <div className="price">
                      <p>$100 X 1</p>
                      <p>499.99$</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="product">
                  <Image src="https://via.placeholder.com/100" />
                  <div className="info">
                    <p>product name</p>
                    <div className="price">
                      <p>$100 X 1</p>
                      <p>499.99$</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="subtotal">
                  <p>
                    Subtotal <span>589.98&</span>{" "}
                  </p>
                  <p>
                    Tax <span>2.53&</span>{" "}
                  </p>
                  <p>
                    Shipping <span>0.00&</span>{" "}
                  </p>
                  <p>
                    Total <span>592.51&</span>{" "}
                  </p>
                </div>
              </div>
            </div>
                  </Col>
                  <div className="btn-review">
                      <Buttons title={'Review Order'} />
                  </div>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
