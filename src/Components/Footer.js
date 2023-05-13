import React, { useState } from "react";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = ({ darkMode }) => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={`footer ${darkMode ? "dark-mode" : ""}`}>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center p-4 border-bottom">
          <div className="d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="https://rb.gy/e70is" className="me-4 text-reset">
              https://rb.gy/e70is
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon
                    color={darkMode ? "secondary" : "white"}
                    icon="gem"
                    className="me-3"
                  />
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Usefullinks</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon
                    color={darkMode ? "secondary" : "white"}
                    icon="home"
                    className="me-2"
                  />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon
                    color={darkMode ? "secondary" : "white"}
                    icon="envelope"
                    className="me-3"
                  />
                  info@example.com
                </p>
                <p>
                  <MDBIcon
                    color={darkMode ? "secondary" : "white"}
                    icon="phone"
                    className="me-3"
                  />{" "}
                  +01 234 567 88
                </p>
                <p>
                  <MDBIcon
                    color={darkMode ? "secondary" : "white"}
                    icon="print"
                    className="me-3"
                  />{" "}
                  +01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{
            backgroundColor: darkMode ? "#212529" : "rgba(0, 0, 0, 0.05)",
          }}
        >
          {new Date().getFullYear()} Câu lạc bộ Thể Hình Ckầm Cảm:
          <a
            className={`text-reset fw-bold ${darkMode ? "text-light" : ""}`}
            href="#!"
          >
            {" "}
            Personal Training Services
          </a>
        </div>
        {/* Back to Top button */}
        <div className="back-to-top" onClick={handleBackToTop}>
          <i class="bi bi-arrow-up"></i>
        </div>
      </MDBFooter>
    </footer>
  );
};

export default Footer;
