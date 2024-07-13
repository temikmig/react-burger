import React, { FC } from 'react';
import { useCallback, useEffect } from 'react';
import css from './modal.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { TModalProps } from '../../utils/types';

const Modal:FC<TModalProps> = ( { cont, header='', handleCloseThis } ) => {

    const handleCloseModal = useCallback(() => {
        handleCloseThis();
    }, [handleCloseThis]);

    useEffect(() => {
        const closeModalByEsc = (e:any) => {
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

export default Modal;