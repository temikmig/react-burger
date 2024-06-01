import React from 'react';
import css from './header-link.module.css';
import PropTypes from 'prop-types';

const HeaderLink = (props) => {
    return (
        <a href="#" className={css.headerLink}>
            {props.icon}
            <span className={css.headerText+' '+(!props.active&&'text_color_inactive')}>{props.text}</span>
        </a>
    );
}

HeaderLink.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.object,
    active: PropTypes.bool
}; 

export default HeaderLink;