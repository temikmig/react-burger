import React, { FC } from 'react';
import css from './profile-navigation-link.module.css';

import { NavLink } from 'react-router-dom';
import { TProfileNavigaitonLinkProps } from '../../../utils/types';

const ProfileNavigaitonLink:FC<TProfileNavigaitonLinkProps> = (props) => {
    return (
        <NavLink to={props.link} className={css.navLink} end>
            {({isActive}) => (
            <span className={css.navText+' '+(!isActive&&'text_color_inactive')}>{props.text}</span>
            )}
        </NavLink>
    );
}

export default ProfileNavigaitonLink;