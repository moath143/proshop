import React from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import "./style.css";
import Buttons from "./../../components/button/index";

const Navbars = () => {
  return (
    <Navbar variant={"dark"} expand="lg">
      <Container>
        <div className="header">
          <Navbar.Brand href="#home">
            <span>Pro</span>Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form>
              <Form.Control type="Search" placeholder="Search..." />
              <Buttons
                className={"btn"}
                title={"Search"}
                icon={<i className="fa-solid fa-magnifying-glass"></i>}
              ></Buttons>
            </Form>
            <Nav>
              <Nav.Link href="#home">
                <i className="fa-solid fa-user"></i>
                <span>Login / Sign up</span>
              </Nav.Link>
              <Nav.Link href="#link">
                <i className="fa-solid fa-bookmark"></i>
                <span>Wishlist</span>
              </Nav.Link>
              <Nav.Link href="#link">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Cart</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navbars;
