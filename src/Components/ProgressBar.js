import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const progressBarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '8px',
    backgroundColor: '#ccc',
    zIndex: 999,
  };

  const progressStyle = {
    height: '100%',
    width: `${scrollProgress}%`,
    backgroundColor: '#00bcd4',
  };

  return (
    <div style={progressBarStyle}>
      <div style={progressStyle} />
    </div>
  );
};

export default ProgressBar;
