import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#321f1c" }}
      >
        <div className="container">
          <Link
            className="navbar-brand"
            to={"/"}
            style={{ fontFamily: "Poppins", fontWeight: 600 }}
          >
            Reqres
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/"}
                  style={{ fontFamily: "Poppins" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/users"}
                  style={{ fontFamily: "Poppins" }}
                >
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/login"}
                  style={{ fontFamily: "Poppins" }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
