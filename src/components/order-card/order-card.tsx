import React, { FC } from 'react';
import css from './order-card.module.css';

const OrderCard:FC = () => {
    return(
        <article className={css.orderCardContaiter}></article>
    );
}

export default OrderCard;