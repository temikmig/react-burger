import React from 'react';
import AppHeaderStyles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import HeaderLink from './header-link/header-link';

const AppHeader = () => {
    const propBurgerIcon = <BurgerIcon type="primary" />;
    const propListIcon = <ListIcon type="secondary" />;
    const propProfileIcon = <ProfileIcon type="secondary" />;

    return (
        <header className={AppHeaderStyles.burgerHeader}>
            <div className={AppHeaderStyles.burgerHeaderCont}>
                <nav className={AppHeaderStyles.headerNav}>
                    <HeaderLink text="Конструктор" icon={propBurgerIcon} />
                    <HeaderLink text="Лента заказов" icon={propListIcon} />
                </nav>
                <Logo />
                <nav className={AppHeaderStyles.headerNav} style={{ justifyContent: 'end' }} >
                    <HeaderLink text="Личный кабинет" icon={propProfileIcon} />
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;