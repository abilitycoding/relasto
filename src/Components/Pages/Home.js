import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../Styles/Home.css";
import { MdLocationOn } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <section className="section1 py-5">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className="p-0">
              <div className="p-3">
                <h1 className=" fw-bold">
                  Find a perfect property Where you'll love to live
                </h1>
                <p>
                  We helps businesses customize, automate and scale up their ad
                  production and delivery.
                </p>
              </div>
              <div className="bg-white p-4 rounded-4 d-flex flex-column gap-3">
                <div className="d-flex justify-content-between pb-3">
                  <Button
                    className=" fw-bold bsrbtn rounded-3"
                    variant="dark"
                    type="submit"
                  >
                    Buy
                  </Button>
                  <Button
                    className=" fw-bold bsrbtn rounded-3"
                    variant="secondary"
                    type="submit"
                  >
                    Sell
                  </Button>
                  <Button
                    className=" fw-bold bsrbtn rounded-3"
                    variant="secondary"
                    type="submit"
                  >
                    Rent
                  </Button>
                </div>

                <Form>
                  <Form.Group
                    className="mb-3 d-flex position-relative"
                    controlId="formBasicCity"
                  >
                    <Form.Control
                      className="p-3 rounded-4 ms-auto"
                      type="City"
                      placeholder="City/Street"
                    />
                    <MdLocationOn className="fs-3 text-info location-icon" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicProperty">
                    <Form.Control
                      className="p-3 rounded-4"
                      type="Property"
                      placeholder="Property Type"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicNumber">
                    <Form.Control
                      className="p-3 rounded-4"
                      type="number"
                      placeholder="Price Range"
                    />
                  </Form.Group>
                  <Button
                    className="bsrbtn w-100 fw-bold px-3 rounded-3"
                    variant="dark"
                    type="submit"
                  >
                    Search
                  </Button>
                </Form>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              className="d-flex align-items-center p-0"
            >
              <img
                src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/6426c505237e74001426cac8/appSource/images/img_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240213%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T044223Z&X-Amz-Expires=25200&X-Amz-Signature=b3613ff0fc229cd13a83579d3d6e040ac86c2ac544b8b7eefc1173ed9ff544d5&X-Amz-SignedHeaders=host"
                alt=""
                width="100%"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section2 py-5">
        <Container>
          <Row className="py-5">
            <Col
              md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center p-0"
            >
              <div className="section2col1 p-5 rounded-4 d-flex flex-column gap-4">
                <h1 className="section2h1 fw-bold">
                  Find a perfect property Where you'll love to live
                </h1>
                <p>
                  We helps businesses customize, automate and scale up their ad
                  production and delivery.
                </p>
                <span>
                  <Button
                    className=" fw-bold bsrbtn rounded-3"
                    variant="dark"
                    type="submit"
                  >
                    Buy
                  </Button>
                </span>
              </div>
            </Col>
            <Col
              md={12}
              lg={6}
              className="section2col2 d-flex justify-content-center align-items-center p-0 "
            >
              <div className="d-flex  gap-4 flex-column justify-content-center align-items-center">
                <div className="d-flex gap-4">
                  <div className="sec2col2 p-4 rounded-4 d-flex flex-column gap-3">
                    <img
                      src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/6426c505237e74001426cac8/appSource/images/img_refresh.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240213%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T060643Z&X-Amz-Expires=25200&X-Amz-Signature=7c87590d345df073ad484e2a18c4af8b453c249fa158d09e328d080bb35e989e&X-Amz-SignedHeaders=host"
                      alt=""
                      width={30}
                    />
                    <h2 className="section2h2">Search your location</h2>
                  </div>
                  <div className="sec2col2 p-4 rounded-4 d-flex flex-column gap-3">
                    <img
                      src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/6426c505237e74001426cac8/appSource/images/img_instagram.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240213%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T060643Z&X-Amz-Expires=25200&X-Amz-Signature=a1a1f1fefa7bd052be8bb1a15c3aa0fa6d76c209b5d6a094dc6f641653271c68&X-Amz-SignedHeaders=host"
                      alt=""
                      width={30}
                    />
                    <h2 className="section2h2">Visit Appointment</h2>
                  </div>
                </div>
                <div className="d-flex gap-4">
                  <div className="sec2col2 p-4 rounded-4 d-flex flex-column gap-3">
                    <img
                      src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/6426c505237e74001426cac8/appSource/images/img_camera.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240213%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T060643Z&X-Amz-Expires=25200&X-Amz-Signature=92175e62ac872b327d46f5ba72503d1f5ea7ff1209e8ce49ade09543405dfa8b&X-Amz-SignedHeaders=host"
                      alt=""
                      width={30}
                    />
                    <h2 className="section2h2">Get your dream house</h2>
                  </div>
                  <div className="sec2col2 p-4 rounded-4 d-flex flex-column gap-3">
                    <img
                      src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/6426c505237e74001426cac8/appSource/images/img_instagram_orange_a700.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240213%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240213T060643Z&X-Amz-Expires=25200&X-Amz-Signature=a1ef47e2349dd487fc50b49233a8cac90b0a3cbe06f919f9982f95bab8fb11e3&X-Amz-SignedHeaders=host"
                      alt=""
                      width={30}
                    />
                    <h2 className="section2h2">Enjoy your Appointment</h2>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
