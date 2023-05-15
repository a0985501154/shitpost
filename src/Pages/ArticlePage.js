import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./ArticlePage.css";
import { articles } from "../Pages/ArticleData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactMarkdown from "react-markdown";
import MarkdownRenderer from "./MarkdownRenderer";
import { Container, Row, Col } from "react-bootstrap";

const ArticlePage = ({ data }) => {
  const { index } = useParams();
  const article = data[index];

  useEffect(() => {
    AOS.init();
  }, []);

  SwiperCore.use([Pagination, Navigation]);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`swiper-container ${darkMode ? "dark-mode" : ""} pt-5`}>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop
        >
          {articles.map((article, index) => (
            <SwiperSlide key={article.id}>
              <Link
                to={`/article/${index}`}
                className="article-link text-decoration-none link-unstyled"
              >
                <div className="article row text-center">
                  <div className="col-md-2"></div> {/* Filler column */}
                  <div className="col-md-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-4 d-flex flex-column justify-content-center">
                    <h2>{article.title}</h2>
                    <p>{article.shortDescription}</p>
                  </div>
                  <div className="col-md-2"></div> {/* Filler column */}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={`article-page ${darkMode ? "dark-mode" : ""}`}>
        <Container>
          <Row>
            <Col>
              <h2>{article.title}</h2>
              <img src={article.image} alt={article.title} />
              <MarkdownRenderer content={article.content} />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer darkMode={darkMode} />
    </>
  );
};

export default ArticlePage;
