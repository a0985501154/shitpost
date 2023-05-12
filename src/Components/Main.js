import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Main.css";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import Footer from "./Footer";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);

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
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`outterwrap ${darkMode ? "dark-mode" : ""}`}>
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3000, // Set autoplay delay to 3 seconds
            disableOnInteraction: false, // Allow autoplay to continue even when user interacts with swiper
          }}
          className="mySwiper"
          style={{ width: "100%", height: "100vh" }} // Set swiper container width and height
        >
          <SwiperSlide>
            <div
              style={{
                backgroundImage: "url('https://via.placeholder.com/1200x800')",
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
                backgroundImage: "url('https://via.placeholder.com/1200x800')",
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
                backgroundImage: "url('https://via.placeholder.com/1200x800')",
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
                backgroundImage: "url('https://via.placeholder.com/1200x800')",
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
                backgroundImage: "url('https://via.placeholder.com/1200x800')",
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
          <h1 className="fw-bold text-center hover-effect border-top border-bottom p-3">
            Meet our team of mim Lỏd Wjbu Coaches
          </h1>
        </div>
        <div className="container py-3">
          <div className="row">
            <div className="col-8">
              <div data-aos="fade-right" data-aos-duration="500">
                <h1 className="text-center fw-bold display-4 text-success my-4 zoom-hover">
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
              className="col-4 d-flex"
              data-aos="fade-left"
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
          <div className="row">
            <div
              className="col-4 d-flex"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                src="https://via.placeholder.com/1200x800"
                alt="Placeholder"
                className="img-fluid hover-effect rounded"
              />
            </div>
            <div className="col-8">
              <div data-aos="fade-left" data-aos-duration="500">
                <h1 className="text-center fw-bold display-4 text-danger my-4 zoom-hover">
                  Filler name
                </h1>
              </div>
              <hr></hr>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-3">
          <div className="row">
            <div className="col-8">
              <div data-aos="fade-right" data-aos-duration="500">
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
              className="col-4 d-flex"
              data-aos="fade-left"
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
          <div className="row">
            <div
              className="col-4 d-flex"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                src="https://via.placeholder.com/1200x800"
                alt="Placeholder"
                className="img-fluid hover-effect rounded"
              />
            </div>
            <div className="col-8">
              <div data-aos="fade-left" data-aos-duration="500">
                <h1 className="text-center fw-bold display-4 text-warning my-4 zoom-hover">
                  Filler name
                </h1>
              </div>
              <hr></hr>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
                <p className="">Filler Text</p>
              </div>
            </div>
          </div>
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
};

export default Main;
