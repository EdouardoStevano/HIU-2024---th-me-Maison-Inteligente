import React from 'react';

// importation du style
import './modal.scss'; 

const Modal = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal medium">
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
