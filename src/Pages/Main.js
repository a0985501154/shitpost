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
          <h1 className="fw-bold border border-2 border-gray p-3 text-center hover-effect">
            Meet our team of mim Lỏd Wjbu Coaches
          </h1>
        </div>
        <div className="container py-3">
          <div className="row">
            <div className="col-8">
              <p data-aos="fade-right" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut sapien in tellus mattis semper. Vivamus lobortis consequat
                arcu, vitae condimentum ipsum maximus at. Vestibulum volutpat
                diam at interdum lobortis.
              </p>
              <p data-aos="fade-right" data-aos-duration="1000">
                Phasellus ullamcorper, erat ac fringilla dapibus, neque lectus
                lobortis risus, at efficitur tortor orci sit amet odio.
                Pellentesque auctor dapibus purus, nec feugiat nisi semper a.
                Quisque scelerisque diam lacus, a egestas urna imperdiet sed.
              </p>
              <p data-aos="fade-right" data-aos-duration="1000">
                Sed quis massa lacinia, fringilla velit eu, congue metus. Fusce
                laoreet nisi quis dui sollicitudin tristique. Vivamus auctor
                luctus urna vitae pellentesque. Aliquam aliquet felis et
                sagittis volutpat. Maecenas at nunc non lacus convallis finibus.
              </p>
              <p data-aos="fade-right" data-aos-duration="1000">
                Duis laoreet efficitur enim a fringilla. In dapibus lacus eget
                neque bibendum ultricies. Nam auctor urna in iaculis aliquet.
                Nunc sed tristique mauris. Sed laoreet lacinia nunc at aliquet.
              </p>
              <p data-aos="fade-right" data-aos-duration="1000">
                Integer dapibus consectetur nibh, eget suscipit dui interdum
                non. Donec aliquet tristique ex, id semper mauris. Sed efficitur
                condimentum ante, sit amet facilisis nisi efficitur et. Ut
                vulputate, neque ac elementum ullamcorper, metus massa euismod
                nisl, eu dapibus velit neque sed lorem.
              </p>
              <p data-aos="fade-right" data-aos-duration="1000">
                Nulla fringilla lacus non ligula vestibulum, in gravida metus
                dignissim. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Sed eleifend, nisi
                at varius consequat, erat risus tincidunt nunc, id aliquam
                turpis mi id turpis. Etiam vestibulum turpis et semper pharetra.
              </p>
            </div>
            <div
              className="col-4"
            >
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
