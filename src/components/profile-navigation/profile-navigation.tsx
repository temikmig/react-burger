import React, { FC } from 'react';
import css from './profile-navigation.module.css';

import ProfileNavigaitonLink from './profile-navigation-link/profile-navigation-link';

const ProfileNavigaiton:FC = () => {
    return (
        <>
            <ProfileNavigaitonLink link="" text="Профиль" />
            <ProfileNavigaitonLink link="orders" text="История заказов" />
            <ProfileNavigaitonLink link="logout" text="Выход" />
        </>
    );
}

export default ProfileNavigaiton;