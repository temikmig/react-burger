import React, { FC, MouseEvent } from 'react';
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
        const closeModalByEsc = (e:KeyboardEvent) => {
          e.key === "Escape" && handleCloseModal();
        };
        document.addEventListener("keydown", closeModalByEsc);
    
        return () => {
          document.removeEventListener("keydown", closeModalByEsc);
        };
      }, [handleCloseModal]);

    return(
        <ModalOverlay handleCloseOut={handleCloseModal}>
            <div className={css.modalWin} onClick={(e:MouseEvent) => e.stopPropagation()}>
                <h1 className={header!==''?css.modalHeader:css.modalHeaderNoHeader}>{ header }<div onClick={handleCloseModal} className={css.modalCloseButton} data-type="close_modal"><CloseIcon type="primary" /></div></h1>
                { cont }
            </div>
        </ModalOverlay>
    );
}

export default Modal;