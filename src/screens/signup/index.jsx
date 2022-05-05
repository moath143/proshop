import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbars from "./../../components/navbar";
import Buttons from "./../../components/button";
import InputForm from "../../components/inputForm";
import SignupImage from "../../Assets/Group 421.png";
import "./style.css";

const Signup = () => {
  return (
    <>
      <Navbars />
      <section className="signup">
        <Container>
          <Row>
            <Col sm={5} className="align-items-center">
              <h1>Signup</h1>
              <p>Sign up and get exclusive offers from us</p>
              <Form>
                <InputForm
                  label={"name"}
                  controlId={"formBasicName"}
                  type={"text"}
                  placeholder={"Your name"}
                />
                <InputForm
                  label={"Enter your email address"}
                  controlId={"formBasicEmail"}
                  type={"email"}
                  placeholder={"name@example.com"}
                />
                <InputForm
                  label={"Enter your password"}
                  controlId={"formBasicPassword"}
                  type={"password"}
                  placeholder={"*********"}
                />
                <InputForm
                  label={"Confirm your password"}
                  controlId={"formBasicConfirmPassword"}
                  type={"password"}
                  placeholder={"*********"}
                />
                <Buttons title={"Sign up"} />
                <hr />
              </Form>
              <p className="login-page">
                Have an account ? <Link to="/login">Login</Link>
              </p>
            </Col>
            <Col sm={7} className="align-items-center">
              <img
                src={SignupImage}
                alt="signup"
                // style={{ width: "859px", height: "781px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Signup;
