import React from 'react'
import { Image } from 'react-bootstrap'
import Subtotal from '../subtotal';
import './style.css'

const OrderDetails = (props) => {
  return (
    <>
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
          {props.hr}
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
          {props.hr}
          {props.subtotal}
        </div>
      </div>
    </>
  );
}

export default OrderDetails