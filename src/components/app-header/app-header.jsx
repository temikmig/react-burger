import React from 'react';
import css from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import HeaderLink from './header-link/header-link';

const AppHeader = () => {
    const propBurgerIcon = <BurgerIcon type="primary" />;
    const propListIcon = <ListIcon type="secondary" />;
    const propProfileIcon = <ProfileIcon type="secondary" />;

    const isTrue = true;
    const isFalse = false;

    return (
        <header className={css.burgerHeader}>
            <div className={css.burgerHeaderCont}>
                <nav className={css.headerNav}>
                    <HeaderLink text="Конструктор" icon={propBurgerIcon} active={isTrue} />
                    <HeaderLink text="Лента заказов" icon={propListIcon} active={isFalse} />
                </nav>
                <Logo />
                <nav className={css.headerNav} style={{ justifyContent: 'end' }} >
                    <HeaderLink text="Личный кабинетик" icon={propProfileIcon} active={isFalse} />
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;