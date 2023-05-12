import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Main.css';

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    AOS.init();
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(isVisible);
  };

  return (
    <>
      <nav
        className={`navbar ${
          darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
        } fixed-top ${visible ? 'visible' : 'hidden'}`}
      >
        <div className="container d-flex justify-content-between">
          <h1
            className={`navbar-brand ${
              darkMode ? 'text-light' : 'text-dark'
            } fs-4 m-0 px-2`}
          >
            Câu Lạc Bộ Thể Hình Ckầm Cảm
          </h1>
          <div>
            <button
              className={`dark-mode-toggle btn btn-${
                darkMode ? 'light' : 'dark'
              }`}
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <i className="bi bi-sun-fill"></i>
              ) : (
                <i className="bi bi-moon-fill"></i>
              )}
              {darkMode ? ' Light Mode' : ' Dark Mode'}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Main;
