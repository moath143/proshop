import React from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./style.css";
import Buttons from "./../../components/button/index";

const Navbars = () => {
  return (
    <Navbar variant={"dark"} expand="lg">
      <Container>
        <div className="header">
            <Link to='/' className='navbar-brand'>
              <span>Pro</span>Shop
            </Link>
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
              <Link to='/login' className='nav-link'>
                <i className="fa-solid fa-user"></i>
                <span>Login / Sign up</span>
              </Link>
              <Link to='/wishlist' className='nav-link'>
                <i className="fa-solid fa-bookmark"></i>
                <span>Wishlist</span>
              </Link>
              <Link to='/cart' className='nav-link'>
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Cart</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navbars;
