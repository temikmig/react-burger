import React from 'react';
import css from './not-found-page.module.css';

import { useNavigate } from 'react-router-dom';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import image from '../../images/not-found.png'

export const NotFound404 = () => {
    const navigate = useNavigate();

    const linkHome = () => {
        navigate('/');
    };

    return(
        <div className={css.notFoundContainer}>
            <img src={image} className={css.notFoundImage} />
            <h1 className={css.notFoundHeader}>Космонавт грустит, потому что этой страницы не существует:(</h1>
            <Button htmlType="button" type="primary" onClick={linkHome} size="large">Вернуться к конструктору бургеров</Button>
        </div>
    );
}