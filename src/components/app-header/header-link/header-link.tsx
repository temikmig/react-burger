import React, {FC} from 'react';
import css from './header-link.module.css';

import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { NavLink } from 'react-router-dom';

import { THeaderLinkProps } from '../../../utils/types';

const HeaderLink:FC<THeaderLinkProps> = (props) => {
    return (
        <NavLink to={props.link} className={css.headerLink}>
            {({isActive}) => (
            <>
                {props.icon==='burger'&&<BurgerIcon type={isActive?'primary':'secondary'} />}
                {props.icon==='list'&&<ListIcon type={isActive?'primary':'secondary'} />}
                {props.icon==='profile'&&<ProfileIcon type={isActive?'primary':'secondary'} />}
                <span className={css.headerText+' '+(!isActive&&'text_color_inactive')}>{props.text}</span>
            </>
            )}
        </NavLink>
    );
}

export default HeaderLink;