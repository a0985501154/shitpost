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
import megumin from "../Asset/Img/Footermin.jpg";

const Footer = ({ darkMode }) => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={`footer ${darkMode ? "bg-dark text-white" : ""}`}>
      <MDBFooter
        bgColor={darkMode ? "dark" : "light"}
        className="text-center text-lg-start"
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
                <img src={megumin} alt="Megumin.png" className="img-fluid" />
              </MDBCol>

              <MDBCol md="4" lg="4" xl="4" className="mx-auto mb-4 text-center">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon
                    color={darkMode ? "secondary" : "white"}
                    icon="gem"
                    className="me-3"
                  />
                  Our motto
                </h6>
                <p>"Elevate, Dominate, and Blaze a Dank Trail to Gainz!"</p>
              </MDBCol>

              <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
                <p>
                  <a href="#!" className="text-reset custom-link">
                    <b> Châu:</b> https://rb.gy/xelq3
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset custom-link">
                    <b> Tú: </b>https://rb.gy/lw7yf
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset custom-link">
                    <b>Tài: </b>https://rb.gy/h5mq3
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset custom-link">
                    <b></b>
                  </a>
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
