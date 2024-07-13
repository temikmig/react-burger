import React, { useState, useRef, FC } from 'react';
import css from './profile-page-orders.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import OrderCard from '../../../components/order-card/order-card';

export const ProfilePageOrders:FC = () => {
    return(
        <>
            <section className={css.ordersList}>
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </section>
        </>
    );
}