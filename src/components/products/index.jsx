import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Line from "./../line";
import ProductsItem from '../productItem'
import "./style.css";

const Products = () => {
  return (
    <div className="products">
      <Container>
        <Row>
          <Col>
            <Line
              title={"featured products"}
              className={"center line"}
              position={"center"}
            />
          </Col>
        </Row>
        <Row>
            <ProductsItem />
        </Row>
      </Container>
    </div>
  );
};

export default Products;
