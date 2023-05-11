import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Main.css";
import Navbar from "./Navbar";

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

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
        <h1
          className="cool-text text-center p-5"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          Welcome home, brother in arms
        </h1>
        <div className="paragraphs">
          <p data-aos="fade-right" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
            euismod leo, eget accumsan purus vestibulum eu. Quisque pellentesque
            imperdiet posuere.
          </p>
          <p data-aos="fade-right" data-aos-duration="1200">
            Nunc consectetur eu nunc non consectetur. Suspendisse id velit ac
            lectus malesuada ullamcorper. Aenean maximus commodo elementum.
          </p>
          <p data-aos="fade-right" data-aos-duration="1500">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Curabitur id neque ultrices, commodo justo
            vitae, malesuada lorem.
          </p>
        </div>
        <div className="paragraphs">
          <p data-aos="fade-right" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
            euismod leo, eget accumsan purus vestibulum eu. Quisque pellentesque
            imperdiet posuere.
          </p>
          <p data-aos="fade-right" data-aos-duration="1200">
            Nunc consectetur eu nunc non consectetur. Suspendisse id velit ac
            lectus malesuada ullamcorper. Aenean maximus commodo elementum.
          </p>
        </div>
        <div className="paragraphs">
          <p data-aos="fade-right" data-aos-duration="1800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
            euismod leo, eget accumsan purus vestibulum eu. Quisque pellentesque
            imperdiet posuere.
          </p>
          <p data-aos="fade-right" data-aos-duration="2000">
            Nunc consectetur eu nunc non consectetur. Suspendisse id velit ac
            lectus malesuada ullamcorper. Aenean maximus commodo elementum.
          </p>
          <p data-aos="fade-right" data-aos-duration="2200">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Curabitur id neque ultrices, commodo justo
            vitae, malesuada lorem.
          </p>
        </div>
        <div className="paragraphs col-lg-6 offset-lg-6">
          <p data-aos="fade-left" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
            euismod leo, eget accumsan purus vestibulum eu. Quisque pellentesque
            imperdiet posuere.
          </p>
          <p data-aos="fade-left" data-aos-duration="1200">
            Nunc consectetur eu nunc non consectetur. Suspendisse id velit ac
            lectus malesuada ullamcorper. Aenean maximus commodo elementum.
          </p>
          <p data-aos="fade-left" data-aos-duration="1500">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Curabitur id neque ultrices, commodo justo
            vitae, malesuada lorem.
          </p>
        </div>
        <div className="paragraphs col-lg-6 offset-lg-6">
          <p data-aos="fade-left" data-aos-duration="1800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
            euismod leo, eget accumsan purus vestibulum eu. Quisque pellentesque
            imperdiet posuere.
          </p>
          <p data-aos="fade-left" data-aos-duration="2000">
            Nunc consectetur eu nunc non consectetur. Suspendisse id velit ac
            lectus malesuada ullamcorper. Aenean maximus commodo elementum.
          </p>
          <p data-aos="fade-left" data-aos-duration="2200">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Curabitur id neque ultrices, commodo justo
            vitae, malesuada lorem.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
