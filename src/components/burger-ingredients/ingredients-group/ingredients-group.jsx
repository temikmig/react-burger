import React from 'react';
import css from './ingredients-group.module.css';
import PropTypes from 'prop-types';

import IngredientItem from '../ingredient-item/ingredient-item';

import { Link, useLocation } from 'react-router-dom';

function IngredientsGroup({ groupName, groupList, headRef }) {
    const location = useLocation();

    return (
        <section className={css.ingredientsGroup} ref={headRef}>
            <h2 className={css.ingredientsGroupHeader}>{groupName}</h2>
            <div className={css.ingredientsGroupContent}>
                {groupList.map((item, index) => 
                <Link to={`/ingredients/`+item._id} key={item._id} state={{background: location}}>
                    <IngredientItem data={item} />
                </Link> 
                )}
            </div>
        </section>
    );
}

IngredientsGroup.propTypes = {
    groupName: PropTypes.string,
    groupList: PropTypes.array,
    groupId: PropTypes.string
}

export default IngredientsGroup;