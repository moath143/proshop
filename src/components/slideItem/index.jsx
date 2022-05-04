import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Buttons from "./../button/index";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "./style.css";

const slideUrl = "http://localhost:8000/slider";

class SlideItem extends Component {
  state = {
    slide: [],
  };

  componentDidMount() {
    axios.get(slideUrl).then((res) => {
      this.setState({
        slide: res.data,
      });
    });
  }

  render() {
    const list = this.state.slide.map((item, index) => {
      return (
        <SwiperSlide key={index} className="slider">
          <Container>
            <Row>
              <Col
                className="d-flex flex-column align-items-start justify-content-center"
                sm={6}
              >
                <p className='discount'> {item.discount} </p>
                <h1 className='title'> {item.title} </h1>
                <p className='description'> {item.description} </p>
                <Buttons className={"btn-slide"} title={"SHOP NOW"} />
              </Col>
              <Col sm={6}>
                <img src={item.image} alt="iphone" />
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
      );
    });
    return (
      <>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
        >
          {list}
        </Swiper>
      </>
    );
  }
}

export default SlideItem;
