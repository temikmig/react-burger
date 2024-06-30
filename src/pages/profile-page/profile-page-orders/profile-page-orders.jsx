import React, { useState, useRef } from 'react';
import css from './profile-page-orders.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import OrderCard from '../../../components/order-card/order-card';


export const ProfilePageOrders = () => {
    return(
        <>
                <section className={css.ordersList}>
                {Array(10).fill().map((_, i) => <OrderCard key={i} />)}
                </section>
        </>
    );
}