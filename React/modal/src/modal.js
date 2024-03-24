import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={closeModal}>
          Close
        </button>
        <h2>Modal Content</h2>
        <p>This is a modal. You can add any content here.</p>
      </div>
    </div>
  );
};

export default Modal;
