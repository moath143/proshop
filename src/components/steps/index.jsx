import React from 'react'
import { Row, Col } from "react-bootstrap";
import './style.css'

const Steps = () => {
  return (
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
  );
}

export default Steps