import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import "./Home.css"; 

const Home = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div>
        <Navbar />
        <Row className="full-height">
          <Col className="d-flex align-items-center p-0">
            <div
              id="myCarousel"
              className="carousel slide w-100"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="img-left w-100 img-fluid"
                    src="https://images.unsplash.com/photo-1582152629442-4a864303fb96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="First slide"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col className="text-right d-flex align-items-center justify-content-center p-0 ">
            <div className="text-center">
              <h1
                style={{
                  fontFamily: "Poppins",
                  padding: "0 2rem",
                  fontWeight: 600,
                }}
              >
                Explore Our Diverse Community
              </h1>
              <p style={{
                    fontFamily: "Poppins",
                    padding: "0 2rem",
                    fontWeight: 200,
                  }}>
                Discover, Connect, and Engage with Users from Around the World
              </p>
              <p>
                <a
                  className="btn btn-explore btn-lg text-white rounded-pill"
                  href="/users"
                  role="button"
                  style={{
                    fontFamily: "Poppins",
                    padding: "0 2rem",
                    fontWeight: 600,
                  }}
                >
                  Explore Now
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  );
};

export default Home;
