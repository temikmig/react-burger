import React from 'react';
import css from './ingredient-details.module.css';
import PropTypes from 'prop-types';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getIngredientsList } from '../../services/actions/burger-ingredients-list';

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
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getIngredientsList());
    },[dispatch]);

    // const ingredientData = useSelector(store => store.ingredientDetails.ingredientData);
    const { id } = useParams();

    const { data, isLoad, isError } = useSelector(store => store.ingredientsList);

    if(data.success) {
        const ingredientsList = data.data;

        const ingredientData = ingredientsList.find((ingredient) => ingredient._id === id);

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
}

export default IngredientDetails;