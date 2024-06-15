// Modal.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ message, onClose }) => {
   useEffect(() => {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
   }, [onClose]);

   return (
      <div className="modal-overlay">
         <div className="modal-content">
            <p>{message}</p>
         </div>
      </div>
   );
};

Modal.propTypes = {
   message: PropTypes.string.isRequired,
   onClose: PropTypes.func.isRequired,
};

export default Modal;
