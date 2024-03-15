import React from "react";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <p className="mb-0 text-muted">© 2021 Company, Inc</p>
          </div>

          <div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto">
            <a href="/" className="link-dark text-decoration-none">
              <svg className="bi me-2" width="40" height="32">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
          </div>

          <div className="col-md-4">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
