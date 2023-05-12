import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Main.css";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

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

      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
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
        </Swiper>

        {/* Rest of the code */}
      </div>
    </>
  );
};

export default Main;
