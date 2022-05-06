import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Buttons from "./../button";
import axios from "axios";
import "./style.css";

const producsUrl = `https://moath143.github.io/apiproshop/data.json`;

class ProductItem extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get(producsUrl).then((res) => {
      console.log(res.data);
      this.setState({ products: res.data.products });
    });
  }
  render() {
    let { products } = this.state;
    let productsList = products.map((product, index) => {
      return (
        <Col key={index} sm={4}>
          <Card className="text-center">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title className="product-name">{product.title}</Card.Title>
              <div className="rate text-center d-flex justify-content-center">
                <ReactStars
                  count={5}
                  // onChange={ratingChanged}
                  size={32}
                  activeColor="#ffd700"
                  value={Number(product.rating)}
                  isHalf={true}
                />
              </div>
              <Card.Text className="product-price">{product.price}</Card.Text>
              <div className="btns-cart">
                <Buttons title="Add To Cart" className="btn-cart" />
                <Buttons
                  className="icon-cart"
                  icon={<i className="fa-regular fa-bookmark"></i>}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return <>{productsList}</>;
  }
}

export default ProductItem;
