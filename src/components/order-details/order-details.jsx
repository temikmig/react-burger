import React from "react";
import css from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetais = () => {
    return(
        <div className={css.burgerOrder}>
            <p className={css.burgerOrderNum}>034536</p>
            <p className={css.burgerOrderDesc}>идентификатор заказа</p>
            <CheckMarkIcon type="primary" />
            <p className={css.burgerOrderDescTop}>Ваш заказ начали готовить</p>
            <p className={css.burgerOrderDescBottom}>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
}

// OrderDetais.propTypes = {}; 

export default OrderDetais;