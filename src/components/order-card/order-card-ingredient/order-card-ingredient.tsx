import React, { FC } from 'react';
import css from './order-card-ingredient.module.css';
import { TOrderCardIngredient } from '../../../utils/types';

const OrderCardIngredient:FC<TOrderCardIngredient> = ({ currentIngredient, ingredientIndex, maxLength, index }) => {
    const zIndex = maxLength - index;

    return(
        <div className={css.ingredientImage} style={{zIndex: zIndex}}>
            {(ingredientIndex==5&&maxLength>6)&&<div className={css.ingredientOther}>+{maxLength-5}</div>}  
            <img src={currentIngredient.image_mobile} alt={currentIngredient.name}/>
        </div>
    );
}

export default OrderCardIngredient;