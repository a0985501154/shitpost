import React from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <h1 className={`navbar-brand ${darkMode ? 'text-light' : 'text-dark'}`}>Shjt Posting Bay</h1>
        <button
          className={`dark-mode-toggle btn btn-${darkMode ? 'light' : 'dark'}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <i className="bi bi-sun-fill"></i>
          ) : (
            <i className="bi bi-moon-fill"></i>
          )}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
