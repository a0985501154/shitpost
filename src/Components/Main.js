import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Main.css";
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

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  useEffect(() => {
    AOS.init();
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
      {isLoading ? (
        <LoadingOverlay />
      ) : (
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
            <div
              className="container py-3"
              data-aos="fade-down"
              data-aos-duration="1250"
            >
              <h1 className="fw-bold text-center hover-effect border-top border-bottom p-3" id="info">
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
                      <b>Description: </b> Hiệp sĩ bóng đêm kiêm nhà hoạt động
                      chống suy đồi sự nam tính
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
                      <b>Contact: </b>0367733784
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
                      <b>Contact: </b> 0904821146
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
                      Filler name
                    </h1>
                  </div>
                  <hr></hr>
                  <div data-aos="fade-right" data-aos-duration="1000">
                    <p className="">Filler Text</p>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="1000">
                    <p className="">Filler Text</p>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="1000">
                    <p className="">Filler Text</p>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="1000">
                    <p className="">Filler Text</p>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="1000">
                    <p className="">Filler Text</p>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="1000">
                    <p className="">Filler Text</p>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="1000">
                    <p className="">Filler Text</p>
                  </div>
                </div>
                <div
                  className="col-md-4 p-0 d-flex"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img
                    src="https://via.placeholder.com/1200x800"
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
            <Footer darkMode={darkMode} />
          </div>
        </>
      )}
    </>
  );
};

export default Main;
