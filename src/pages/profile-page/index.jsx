import React, { useState, useRef } from 'react';
import css from './profile-page.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import AppHeader from '../../components/app-header/app-header';
import ProfileNavigation from '../../components/profile-navigation/profile-navigation';

import { ProfilePageMain } from './profile-page-main/profile-page-main';
import { ProfilePageOrders } from './profile-page-orders/profile-page-orders';
import { LogoutPage } from './profile-logout';

import { useRoutes } from 'react-router-dom';
import { BrowserRouter, Routes, Route, useLocation, Navigate} from 'react-router-dom';

import { NotFound404 } from '../../pages';

export const ProfilePage = () => {
    return(
        <>
            <AppHeader />
            <main className={css.pageMain}>
                <nav className={css.pageNav}>
                    <ProfileNavigation />
                    <Routes>
                        <Route path="" element={<p className={css.pageNavText}>В этом разделе вы можете изменить свои персональные данные</p>} />
                        <Route path="orders" element={<p className={css.pageNavText}>В этом разделе вы можете просмотреть свою историю заказов</p>} />
                    </Routes>
                </nav>
                <section className={css.pageSection}>
                    <Routes>
                        <Route path="" element={<ProfilePageMain />} />
                        <Route path="orders" element={<ProfilePageOrders />} />
                        <Route path="logout" element={<LogoutPage />} />
                        <Route path="*" element={<Navigate to="/"/>} />
                    </Routes>
                </section>
            </main>
        </>
    );
}