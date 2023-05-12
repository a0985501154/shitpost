import React from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav
      className={`navbar ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } fixed-top`}
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
