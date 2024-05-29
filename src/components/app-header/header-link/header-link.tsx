import React from 'react';
import HeaderLinkStyles from './header-link.module.css';

function HeaderLink(props:any) {
    return (
        <a href="#" className={HeaderLinkStyles.headerLink}>
            {props.icon}
            <span className="ml-2">{props.text}</span>
        </a>
    );
}

export default HeaderLink;