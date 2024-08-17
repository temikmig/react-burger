import React, { FC } from 'react';
import css from './order-feed-details-ingredient.module.css';
import { TFeedDetailsIngredientProps } from '../../../utils/types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderFeedDetailsIngredient:FC<TFeedDetailsIngredientProps> = ({currentIngredient, countInOrder}) => {
    
    return(
        <article className={css.ingredientItem}>
            <div className={css.ingredientImage}>
                <img src={currentIngredient.image_mobile} alt={currentIngredient.name}/>
            </div>
            <div className={css.ingredientInfo}>
                <p className={css.ingredientInfoName}>{currentIngredient.name}</p>
                <p className={css.ingredientInfoPrice}>{countInOrder}x{currentIngredient.price}<CurrencyIcon type="primary" /></p>
            </div>
        </article>
    );
}

export default OrderFeedDetailsIngredient;