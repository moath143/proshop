import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./style.css";
import Navbars from "./../../components/navbar";
import InputForm from "../../components/inputForm";
import Buttons from "../../components/button";

const CreateProduct = () => {
  return (
    <>
      <Navbars />
      <Container className="pt-5 pb-5 create-product-section">
        <Row>
          <h1>Create New Product</h1>
        </Row>
        <Row className='forms-product'>
          <Col md={4}>
            <div className="product-image">
              <Form className="upload-file">
                <InputForm className="file" type={"file"} />
                <div className="icon-upload">
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                </div>
              </Form>
              <div className="images">
                <div className="img">
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div className="img">
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div className="img">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <h2>Product Details</h2>
            <Form>
              <InputForm type={"text"} label={"product name"} />
              <InputForm type={"text"} label={"product brand"} />
              <InputForm type={"text"} label={"product ID"} />
              <InputForm type={"text"} label={"product category"} />
              <InputForm
                rows={5}
                label={"product description"}
                as={"textarea"}
                className="textarea"
              />
              <InputForm type={"number"} label={"count in stock"} />
              <InputForm type={"number"} label={"price"} />
            </Form>
          </Col>
        </Row>
        <Row className='submit-product'>
          <Col className='d-flex justify-content-end'>
            <Buttons className='submit-btn' title={'create new product'} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateProduct;
