import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Main.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import LoadingOverlay from "./LoadingOverlay";
import "swiper/swiper-bundle.min.css";
import Footer from "./Footer";
import Bateman from "../Asset/Img/Bateman.jpg";
import Doctor from "../Asset/Img/Dr.Muscle.jpg";
import B1 from "../Asset/Img/B1.jpg";
import B2 from "../Asset/Img/B2.jpg";
import B3 from "../Asset/Img/B3.jpg";
import B4 from "../Asset/Img/B4.jpg";
import B5 from "../Asset/Img/B5.jpg";
import TripleT from "../Asset/Img/TripleT.jpg";
import { articles } from "../Pages/ArticleData";

const Main = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    AOS.init();
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

  SwiperCore.use([Pagination, Navigation, Autoplay]);

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`outterwrap ${darkMode ? "dark-mode" : ""}`}>
        <a
          className="text-center position-absolute text-white fs-3 zoom-hover"
          href="#info"
          style={{
            bottom: "auto",
            top: "6rem",
            left: "3rem",
            zIndex: 999,
            textDecoration: "none",
          }}
        >
          Our awesome Athletes/Coaches
        </a>

        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          style={{ width: "100%", height: "100vh" }}
        >
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${B1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${B2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${B3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${B4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${B5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </SwiperSlide>
        </Swiper>
        <div className="main-content">
          <div
            className="container"
            data-aos="fade-down"
            data-aos-duration="1250"
          >
            <h1
              className="fw-bold text-center hover-effect border-top border-bottom p-3"
              id="info"
            >
              Some useful articles on lifting and lifestyle
            </h1>
          </div>

          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            navigation
            loop
          >
            {articles.map((article, index) => (
              <SwiperSlide key={article.id}>
                <Link
                  to={`/article/${index}`}
                  className="article-link text-decoration-none link-unstyled"
                >
                  <div
                    className="container-fluid text-center mt-3"
                    style={{ height: "50vh" }}
                  >
                    <div className="row justify-content-center h-100">
                      <div className="col-md-6 col-12">
                        <div
                          className="rounded bg-cover bg-center h-100"
                          style={{
                            backgroundImage: `url(${article.image})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "auto 100%",
                          }}
                        ></div>
                      </div>
                      <div className="col-md-4 col-12 d-flex flex-column justify-content-center">
                        <h2>{article.title}</h2>
                        <p>{article.shortDescription}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="container py-3"
          data-aos="fade-right"
          data-aos-duration="1250"
        >
          <h1
            className="fw-bold text-center hover-effect border-top border-bottom p-3"
            id="info"
          >
            Meet our team of mim Lỏd Wjbu Coaches
          </h1>
        </div>
        <div className="container py-3">
          <div className="row rounded border">
            <div className="col-md-8">
              <div data-aos="fade-down-right" data-aos-duration="500">
                <h1 className="text-center fw-bold display-4 text-success my-4 zoom-hover">
                  Châu Bateman
                </h1>
              </div>
              <hr></hr>
              <div data-aos="fade-right" data-aos-duration="1000">
                <h5 className="fw-bold text-center">
                  Cosplayer/Men's physique competitor
                </h5>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <p className="">
                  <b>Life Goal: </b> Làm đàn ông vĩ đại trở lại
                </p>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <p className="">
                  <b>Description: </b> Hiệp sĩ bóng đêm kiêm nhà hoạt động chống
                  suy đồi sự nam tính
                </p>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <p className="">
                  <b>Best lifts(S/B/D): </b>170/130/160
                </p>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <p className="">
                  <b>Area of operation: </b>Đà Nẵng
                </p>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <p className="">
                  <b>Offer both online and offline coaching</b>
                </p>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <a
                  href="https://www.facebook.com/chau.vuong.731135"
                  className="custom-link"
                >
                  <b>Facebook: </b>https://rb.gy/xelq3
                </a>
              </div>
            </div>
            <div
              className="col-md-4 d-flex p-0"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                src={Bateman}
                alt="Placeholder"
                className="img-fluid hover-effect rounded"
              />
            </div>
          </div>
        </div>
        <div className="container py-3">
          <div className="row rounded border">
            <div
              className="col-md-4 p-0 d-flex"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                src={Doctor}
                alt="Placeholder"
                className="img-fluid hover-effect rounded"
              />
            </div>
            <div className="col-md-8">
              <div data-aos="fade-down" data-aos-duration="500">
                <h1 className="text-center fw-bold display-4 text-danger my-4 zoom-hover">
                  Phan Văn Tú
                </h1>
              </div>
              <hr></hr>
              <div data-aos="fade-down" data-aos-duration="1000">
                <h4 className="fw-bold text-center">Dr.Muscle</h4>
              </div>
              <div data-aos="fade-down" data-aos-duration="1000">
                <p className="">
                  <b>Life Goal: </b> Một trí tuệ tốt trên một cơ thể mạnh
                </p>
              </div>
              <div data-aos="fade-down" data-aos-duration="1000">
                <p className="">
                  <b>Description: </b> Bác sĩ với cột sống Titan
                </p>
              </div>
              <div data-aos="fade-down" data-aos-duration="1000">
                <p className="">
                  <b>Best lifts(S/B/D): </b> 195/120/205
                </p>
              </div>
              <div data-aos="fade-down" data-aos-duration="1000">
                <p className="">
                  <b>Area of operation: </b>Hà Nội
                </p>
              </div>
              <div data-aos="fade-down" data-aos-duration="1000">
                <p className="">
                  <b>Offer online coaching</b>
                </p>
              </div>
              <div data-aos="fade-down" data-aos-duration="1000">
                <a
                  href="https://www.facebook.com/67phantu"
                  className="custom-link"
                >
                  <b>Facebook: </b>https://rb.gy/lw7yf
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container py-3"
          data-aos="fade-down-up"
          data-aos-duration="1250"
        >
          <h3 className=" text-center hover-effect border-top border-bottom p-3">
            We are open to both online and offline coaching (depends on
            location)
          </h3>
        </div>
        <div className="container py-3">
          <div className="row rounded border">
            <div className="col-md-8">
              <div data-aos="fade-down" data-aos-duration="500">
                <h1 className="text-center fw-bold display-4 text-primary my-4 zoom-hover">
                  Thanh Tài
                </h1>
              </div>
              <hr></hr>
              <div data-aos="fade-right" data-aos-duration="1000">
                <h4 className="fw-bold text-center">TripleT</h4>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <p className="">
                  <b>Life Goal: </b> Help others grow strong both physically and
                  mentally.
                </p>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <p className="">
                  <b>Description: </b> Struggling with consistency in your
                  exercise routine? Look no further! I am a dedicated personal
                  trainer committed to helping you forge a healthy lifestyle and
                  develop long-term exercise habits. With my expertise and
                  personalized approach, I will design a program tailored to
                  your unique needs and goals. Whether it's strength training,
                  cardio, flexibility work, or mindfulness practices, I will
                  guide you every step of the way.
                </p>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <p className="">
                  <b>Best lifts(S/B/D): </b> 170/100/200
                </p>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <p className="">
                  <b>Area of operation: </b>Tp.Hồ Chí Minh
                </p>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <p className="">
                  <b>Offer both online and offline coaching</b>
                </p>
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <a href="https://rb.gy/h5mq3" className="custom-link">
                  <b>Facebook: </b>https://rb.gy/h5mq3
                </a>
              </div>
            </div>
            <div
              className="col-md-4 p-0 d-flex"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                src={TripleT}
                alt="Placeholder"
                className="img-fluid hover-effect rounded"
              />
            </div>
          </div>
        </div>
        <div className="container py-3">
          <div className="row rounded border">
            <div
              className="col-md-4 p-0 d-flex"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                src="https://via.placeholder.com/1200x800"
                alt="Placeholder"
                className="img-fluid hover-effect rounded"
              />
            </div>
            <div className="col-md-8">
              <div data-aos="fade-up" data-aos-duration="500">
                <h1 className="text-center fw-bold display-4 text-warning my-4 zoom-hover">
                  Filler name
                </h1>
              </div>
              <hr></hr>
              <div data-aos="fade-up" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Main;
