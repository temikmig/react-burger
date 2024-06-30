import React from 'react';
import css from './header-link.module.css';
import PropTypes from 'prop-types';

import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { NavLink } from 'react-router-dom';

const HeaderIcon = (props) => {
    switch(props.icon) {
        case 'burger': return (<BurgerIcon type={props.active?"primary":"secondary"} />);
        case 'list': return (<ListIcon type={props.active?"primary":"secondary"} />)
        case 'profile': return <ProfileIcon type={props.active?"primary":"secondary"} />
    }
}

const HeaderLink = (props) => {
    return (
        <NavLink to={props.link} className={css.headerLink}>
            {({isActive}) => (
            <>
                <HeaderIcon icon={props.icon} active={isActive}/>
                <span className={css.headerText+' '+(!isActive&&'text_color_inactive')}>{props.text}</span>
            </>
            )}
        </NavLink>
    );
}

HeaderLink.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string
}; 

HeaderIcon.propTypes = {
    icon: PropTypes.string,
    active: PropTypes.bool
}; 

export default HeaderLink;