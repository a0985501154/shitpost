import React, { useEffect, useState } from "react";
import "./Navbar.css";


const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos === 0;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`navbar ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } fixed-top ${visible ? "" : "navbar-hidden"}`}
    >
      <div className="container d-flex justify-content-between">
        <h1
          className={`navbar-brand ${
            darkMode ? "text-light" : "text-dark"
          } fs-4 m-0 px-2`}
        >
          Câu Lạc Bộ Thể Hình Ckầm Cảm
        </h1>
        <div>
          <button
            className={`dark-mode-toggle btn btn-${
              darkMode ? "light" : "dark"
            }`}
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <i className="bi bi-sun-fill"></i>
            ) : (
              <i className="bi bi-moon-fill"></i>
            )}
            {darkMode ? " Light Mode" : " Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
