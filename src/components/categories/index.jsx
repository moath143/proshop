import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Line from "../line";
import CategoriesItem from '../categoriesItem'
import "./style.css";


const Categories = () => {
    return (
      <div className="categories">
        <Container>
          <Row className="flex-column d-flex">
            <Col>
              <Line title={"featured categories"} className={"line"} position={'left'} />
            </Col>
            <Col className="d-flex flex-wrap flex-row justify-content-between">
              <CategoriesItem />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Categories






