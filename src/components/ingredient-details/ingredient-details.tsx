import React, { FC } from 'react';
import css from './ingredient-details.module.css';

import { useEffect } from 'react';

import { useDispatch, useSelector } from "../../services/types/hooks";
import { useParams } from 'react-router-dom';

import { getIngredientsList } from '../../services/actions/burger-ingredients-list';
import { TIngredient, TIngredientDetailsItem } from '../../utils/types';

const IngredientDetailsItem:FC<TIngredientDetailsItem> = ( {head, val} ) => {
    return(
        <li className={css.ingredientDetailsItem}>
            <h3 className={css.ingredientDetailsItemHead}>{head}</h3>
            <span className={css.ingredientDetailsItemVal}>{val}</span>
        </li>
    );
}

const IngredientDetails:FC = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getIngredientsList());
    },[dispatch, getIngredientsList]);

    const { id } = useParams();

    const { data, isLoad, isError } = useSelector((store) => store.ingredientsList);

    const ingredientsList = data?.data;

    const ingredientData = ingredientsList?.find((ingredient:TIngredient) => ingredient._id === id);

    return(
        data?.success&&
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