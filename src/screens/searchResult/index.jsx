import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import Navbars from "./../../components/navbar/index";
import Iphone from "./../../Assets/img20.png";
import "./style.css";
import Buttons from "../../components/button";
import Line from "../../components/line";

const SearchResult = () => {
  return (
    <section className='search'>
      <Navbars />
      <Container className='pt-5 pb-5'>
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
          <Col sm={4}>
            <Card className="text-center search-result">
              <Card.Img variant="top" src={Iphone} />
              <Card.Body>
                <Card.Title className="product-name">
                  iPhone 11 Pro 256GB Memory
                </Card.Title>
                <div className="rate text-center d-flex justify-content-center">
                  <ReactStars
                    count={5}
                    // onChange={ratingChanged}
                    size={32}
                    activeColor="#ffd700"
                    value={4.5}
                    isHalf={true}
                  />
                </div>
                <Card.Text className="product-price">499.99$</Card.Text>
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
        </Row>
      </Container>
    </section>
  );
};

export default SearchResult;
