import React from 'react';
import css from './ingredients-group.module.css';
import PropTypes from 'prop-types';

import IngredientItem from '../ingredient-item/ingredient-item';

function IngredientsGroup({ groupName, groupList, headRef }) {
    return (
        <section className={css.ingredientsGroup} ref={headRef}>
            <h2 className={css.ingredientsGroupHeader}>{groupName}</h2>
            <div className={css.ingredientsGroupContent}>
                {groupList.map((item, index) => <IngredientItem key={item._id} data={item} /> )}
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