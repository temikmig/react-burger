import React, { FC } from 'react';
import css from './profile-page.module.css';

import ProfileNavigation from '../../components/profile-navigation/profile-navigation';

import { ProfilePageMain } from './profile-page-main/profile-page-main';
import { ProfilePageOrders } from './profile-page-orders/profile-page-orders';
import { LogoutPage } from './profile-logout';

import { Routes, Route, Navigate} from 'react-router-dom';
import { OrderFeedPage } from '../order-feed-page/order-feed-page';

export const ProfilePage:FC = () => {
    return(
        <>
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
                        <Route path="orders/:number" element={<OrderFeedPage />} />
                        <Route path="logout" element={<LogoutPage />} />
                        <Route path="*" element={<Navigate to="/"/>} />
                    </Routes>
                </section>
            </main>
        </>
    );
}