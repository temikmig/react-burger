import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styles from "./modal-overlay.module.css";
import { TModalOverlayProps } from '../../utils/types';

const modalRoot:any = document.getElementById("react-modals");

const ModalOverlay:FC<TModalOverlayProps> = ({ children, handleCloseOut }) => {
  return ReactDOM.createPortal((
    <div className={styles.modalOverlay} onClick={handleCloseOut}>{ children }</div>
  ), modalRoot);
};

export default ModalOverlay;