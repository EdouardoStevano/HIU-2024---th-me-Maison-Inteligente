import React from 'react';

// IMPORTAION CSS (STYLE)
import './modal.scss'; 

const Modal = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    isOpen && (
        <div className="modal-overlay">
            <button className="modal-close" onClick={closeModal}>
                &times;
            </button>
        <div className="modal">
            <div className="modal-content">{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
