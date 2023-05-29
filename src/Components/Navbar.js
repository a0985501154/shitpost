import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos === 0;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const getNavbarTitle = () => {
    if (isMobile) {
      return "PT Services";
    } else {
      return "Personal Training Services";
    }
  };

  return (
    <nav
      className={`navbar ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } fixed-top ${visible ? "" : "navbar-hidden"} navbar-outline`}
    >
      <div className="container d-flex justify-content-between">
        <div className="navbar-title">
          <h1
            className={`navbar-brand ${
              darkMode ? "text-light" : "text-dark"
            } fs-4 m-0 px-2`}
          >
            <Link to="/" className="navbar-link home-link custom-link">{getNavbarTitle()}</Link>
          </h1>
        </div>
        <div className="navbar-dark-mode">
          <button
            className={`dark-mode-toggle btn btn-${
              darkMode ? "light" : "dark"
            } ${isMobile ? "dark-mode-toggle-mobile" : ""}`}
            onClick={toggleDarkMode}
          >
            {isMobile ? (
              <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
            ) : (
              <>
                {darkMode ? (
                  <i className="bi bi-sun-fill"></i>
                ) : (
                  <i className="bi bi-moon-fill"></i>
                )}
                {darkMode ? " Light Mode" : " Dark Mode"}
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
