import React from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav
      className={`navbar ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } fixed-top`}
    >
      <div className="container">
        <h1
          className={`navbar-brand ${
            darkMode ? "text-light" : "text-dark"
          } fs-4 d-flex align-items-center px-2`}
        >
          Câu Lạc Bộ Thể Hình Ckầm Cảm
        </h1>
        <button
          className={`dark-mode-toggle btn btn-${darkMode ? "light" : "dark"} px-2`}
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
    </nav>
  );
};

export default Navbar;
