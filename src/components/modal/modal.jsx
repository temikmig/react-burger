import React from 'react';
import { useCallback, useEffect } from 'react';
import css from './modal.module.css';

import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

const Modal = ( { cont, header='', handleClose } ) => {

    const handleCloseModal = useCallback(() => {
        handleClose();
    }, [handleClose]);

    useEffect(() => {
        const closeModalByEsc = (e) => {
          e.key === "Escape" && handleCloseModal();
        };
        document.addEventListener("keydown", closeModalByEsc);
    
        return () => {
          document.removeEventListener("keydown", closeModalByEsc);
        };
      }, [handleCloseModal]);

    return(
        <ModalOverlay handleCloseOut={handleCloseModal}>
            <div className={css.modalWin} onClick={e => e.stopPropagation()}>
                <h1 className={header!==''?css.modalHeader:css.modalHeaderNoHeader}>{ header }<div onClick={handleCloseModal} className={css.modalCloseButton}><CloseIcon type="primary" /></div></h1>
                { cont }
            </div>
        </ModalOverlay>
    );
}

Modal.propTypes = {
    cont: PropTypes.object,
    header: PropTypes.string,
    handleClose: PropTypes.func
}; 

export default Modal;