import React from 'react';
import css from './ingredient-details.module.css';
import PropTypes from 'prop-types';

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
    val: PropTypes.string
}; 

function IngredientDetails( {data} ) {
    return(
        <>
        <img src={data.image_large} alt="img" />
        <h2 className={css.ingredientName}>{data.name}</h2>
        <ul className={css.ingredientDetailsList}>
            <IngredientDetailsItem head="Калории, ккал" val={data.calories} />
            <IngredientDetailsItem head="Белки, г" val={data.proteins} />
            <IngredientDetailsItem head="Жиры, г" val={data.fat} />
            <IngredientDetailsItem head="Углеводы, г" val={data.carbohydrates} />
        </ul>
        </>
    );
}

IngredientDetails.propTypes = {
    data: PropTypes.shape({
        image_large: PropTypes.string,
        name: PropTypes.string,
        calories: PropTypes.number,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
    })
}; 

export default IngredientDetails;