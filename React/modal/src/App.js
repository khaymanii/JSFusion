import React, { useState } from "react";
import Modal from "./modal";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <button className="open-btn" onClick={toggleModal}>
        Open Modal
      </button>
      {isOpen && <Modal closeModal={toggleModal} />}
    </div>
  );
};

export default App;
