import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./modal-overlay.module.css";
import PropTypes from 'prop-types';

const modalRoot = document.getElementById("react-modals");

const ModalOverlay = ({ children, handleCloseOut }) => {
  return ReactDOM.createPortal((
    <div className={styles.modalOverlay} onClick={handleCloseOut}>{ children }</div>
  ), modalRoot);
};

ModalOverlay.propTypes = {
    children: PropTypes.element.isRequired
}; 

export default ModalOverlay;