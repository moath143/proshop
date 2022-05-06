import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import Navbars from "./../../components/navbar";
import Buttons from "../../components/button";

const Profile = () => {
  return (
    <>
      <Navbars />
      <Container className="profile-section mt-5 mb-5">
        <Row>
          <Col md={4}>
            <div className="profile-menu">
              <div className="image">
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle={true}
                />
                <p>John Doe</p>
              </div>
              <ul>
                <li>my orders</li>
                <li>Wishlist</li>
                <li>notifcations</li>
                <li>settings</li>
                <hr />
                <li>logout</li>
              </ul>
            </div>
          </Col>
          <Col md={8}>
            <div className="profile-info">
              <div className="info">
                <h3>my profile</h3>
                <p>
                  first name <span>amy</span>
                </p>
                <p>
                  last name <span>mayer</span>
                </p>
                <p>
                  email <span>amymay@gmail.com</span>
                </p>
                <p>
                  Birthday <span>12/4/1991</span>
                </p>
                <Buttons
                  className="change-password"
                  title={"change password"}
                />
              </div>
              <div className="avatar">
                <Image
                  src="https://via.placeholder.com/150"
                  roundedCircle={true}
                />
                <Buttons className='upload-image' title={"upload new photo"} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
