import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "container active" : "container"}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
      <nav className="sidebar">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
