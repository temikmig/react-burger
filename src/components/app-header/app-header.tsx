import React, { FC } from 'react';
import css from './app-header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import HeaderLink from './header-link/header-link';

const AppHeader:FC = () => {
    return (
        <header className={css.burgerHeader}>
            <div className={css.burgerHeaderCont}>
                <nav className={css.headerNav}>
                    <HeaderLink link="/" text="Конструктор" icon="burger" />
                    <HeaderLink link="/feed" text="Лента заказов" icon="list" />
                </nav>
                <Logo />
                <nav className={css.headerNav} style={{ justifyContent: 'end' }} >
                    <HeaderLink link="/profile" text="Личный кабинет" icon="profile" />
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;