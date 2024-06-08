import React from 'react';
import css from './ingredient-details.module.css';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

function IngredientDetailsItem( {head, val} ) {
    return(
        <li className={css.ingredientDetailsItem}>
            <h3 className={css.ingredientDetailsItemHead}>{head}</h3>
            <span className={css.ingredientDetailsItemVal}>{val}</span>
        </li>
    );
}

IngredientDetailsItem.propTypes = {
    head: PropTypes.string,
    val: PropTypes.number
}; 

function IngredientDetails() {
    const ingredientData = useSelector(store => store.ingredientDetails.ingredientData);

    return(
        <>
        <img src={ingredientData.image_large} alt={ingredientData.name} />
        <h2 className={css.ingredientName}>{ingredientData.name}</h2>
        <ul className={css.ingredientDetailsList}>
            <IngredientDetailsItem head="Калории, ккал" val={ingredientData.calories} />
            <IngredientDetailsItem head="Белки, г" val={ingredientData.proteins} />
            <IngredientDetailsItem head="Жиры, г" val={ingredientData.fat} />
            <IngredientDetailsItem head="Углеводы, г" val={ingredientData.carbohydrates} />
        </ul>
        
        </>
    );
}

export default IngredientDetails;