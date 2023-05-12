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
      </div>
    </>
  );
};

export default Main;
