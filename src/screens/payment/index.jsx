import React from "react";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import "./style.css";
import Navbars from "./../../components/navbar/index";
import InputForm from "./../../components/inputForm/index";
import Buttons from "./../../components/button/index";
import Steps from "../../components/steps";
import OrderDetails from "../../components/orderDetails";
import { Link } from "react-router-dom";
import Subtotal from "../../components/subtotal";

const Payment = () => {
  return (
    <>
      <Navbars />
      <Container className="pt-5 pb-5 payment">
        <Steps />
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
            <OrderDetails hr={<hr />} subtotal={<Subtotal />} />
          </Col>
          <div className="btn-review">
            <Link to="/review-order">
              <Buttons title={"Review Order"} />
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
