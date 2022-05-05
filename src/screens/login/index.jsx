import React from 'react'
import Navbars from "./../../components/navbar";
import InputForm from "../../components/inputForm";
import {Link} from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import LoginImage from "../../Assets/Group 240.png";
import './style.css'
import Buttons from './../../components/button';

const Login = () => {
  return (
    <>
      <Navbars />
      <section className="login">
        <Container>
          <Row>
            <Col sm={5}>
              <h1>Login</h1>
              <p>Login with your data that you entered during registration</p>
              <Form>
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
                <Buttons title={"Login"} className="btn-login" />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <p className="forgot-password">
                  <Link to="/forgot-password">Forgot your password?</Link>
                </p>
                <hr />
              </Form>
              <div className="btn-signup">
                <Link to="/signup">
                  <Buttons title={"Sign Up Now"} />
                </Link>
              </div>
            </Col>
            <Col sm={7}>
              <img src={LoginImage} alt="login image" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Login