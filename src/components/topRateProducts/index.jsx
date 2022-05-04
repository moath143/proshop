import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Line from "./../line";
import RateProducts from "./../topRateProductsItem";
import "./style.css";

const TopRateProducts = () => {
  return (
    <div className="top-rate-products">
      <Container>
        <Row>
          <Col>
            <Line
              title={"top rate products"}
              className={"line"}
              position={"left"}
            />
          </Col>
        </Row>
        <Row>
          <RateProducts />
        </Row>
      </Container>
    </div>
  );
};

export default TopRateProducts;
