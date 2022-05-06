import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Navbars from "./../../components/navbar";

const CreateProduct = () => {
  return (
    <>
      <Navbars />
      <Container>
        <Row>
          <Col>
            <h1>CreateProduct</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateProduct;
