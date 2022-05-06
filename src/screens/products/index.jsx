import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Navbars from "./../../components/navbar/index";
import Buttons from "../../components/button";
import { Link } from 'react-router-dom';
import "./style.css";

const Products = () => {
  return (
    <>
      <Navbars />
      <Container className="product-table pt-5 pb-5">
        <Row>
          <Col>
            <h1>Products</h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column">
            <Link to='/create-product'>
              <Buttons className="create-product" title={"create product"} />
            </Link>
            <Table striped hover responsive>
              <thead>
                <tr>
                  <th>product id</th>
                  <th>product name</th>
                  <th>product price</th>
                  <th>category</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#564531</td>
                  <td>airpods</td>
                  <td>89.99$</td>
                  <td>Accessories</td>
                  <td className="action">
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr>
                  <td>#564531</td>
                  <td>airpods</td>
                  <td>89.99$</td>
                  <td>Accessories</td>
                  <td className="action">
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr>
                  <td>#564531</td>
                  <td>airpods</td>
                  <td>89.99$</td>
                  <td>Accessories</td>
                  <td className="action">
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr>
                  <td>#564531</td>
                  <td>airpods</td>
                  <td>89.99$</td>
                  <td>Accessories</td>
                  <td className="action">
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr>
                  <td>#564531</td>
                  <td>airpods</td>
                  <td>89.99$</td>
                  <td>Accessories</td>
                  <td className="action">
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr>
                  <td>#564531</td>
                  <td>airpods</td>
                  <td>89.99$</td>
                  <td>Accessories</td>
                  <td className="action">
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr>
                  <td>#564531</td>
                  <td>airpods</td>
                  <td>89.99$</td>
                  <td>Accessories</td>
                  <td className="action">
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr>
                  <td>#564531</td>
                  <td>airpods</td>
                  <td>89.99$</td>
                  <td>Accessories</td>
                  <td className="action">
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr>
                  <td>#564531</td>
                  <td>airpods</td>
                  <td>89.99$</td>
                  <td>Accessories</td>
                  <td className="action">
                    <i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
