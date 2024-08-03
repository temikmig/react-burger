import React, { FC, useEffect, useCallback, useState } from 'react';
import css from './order-card.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'; 
import { useSelector, useDispatch } from '../../services/types/hooks';
import OrderCardIngredient from './order-card-ingredient/order-card-ingredient';
import { TIngredient, TOrderCard } from '../../utils/types';
import uuid from 'react-uuid';

export const OrderCard:FC<TOrderCard> = ({ currentOrder }) => {
    const orderIngredients = currentOrder.ingredients;
    const ingredientsLength = orderIngredients.length; 

    const { data, isLoad, isError } = useSelector((store) => store.ingredientsList);
    const list = data.data;

    const ingredientsList = orderIngredients.map((currentIngredientId:string, index:number) => list.find((item:TIngredient) => (item._id===currentIngredientId)));

    const [orderPrice, setOrderPrice] = useState(0);

    useEffect(
        () => {
          let total = 0;
          ingredientsList.map((item:TIngredient) => (total += item.price));
          setOrderPrice(total);
        },
        [ingredientsList, setOrderPrice]
    );

    const renderIngredients = useCallback((ingredient:TIngredient, index:number) => {
        const zIndex = orderIngredients.length - index;
        if(index<6)
        return (<OrderCardIngredient currentIngredient={ingredient} ingredientIndex={index} maxLength={ingredientsLength} zIndex={zIndex} key={uuid()}/>)
    }, []);

    return(
        <article className={css.orderCardContaiter}>
            <div className={css.orderCardHead}>
                <h2 className={css.orderCardNumber}>#{currentOrder.number}</h2>
                <p className={css.orderCardDate}><FormattedDate date={new Date(currentOrder.createdAt)} /></p>
            </div>
            <h1 className={css.orderCardName}>{currentOrder.name}</h1>
            {(currentOrder.status==='created')&&<p className={css.orderCardStatusCreated}>Создан</p>}
            {(currentOrder.status==='pending')&&<p className={css.orderCardStatusPending}>Готовится</p>}
            {(currentOrder.status==='done')&&<p className={css.orderCardStatusDone}>Выполнен</p>}
            <div className={css.orderCardIngredientsCont}>
                <div className={css.orderCardIngredientsItems}>
                    {ingredientsList.length>0&&
                    ingredientsList.map((ingredient:TIngredient, index:number) => renderIngredients(ingredient, index))
                    }
                </div>
                <div className={css.orderCardPrice}>
                    {orderPrice}<CurrencyIcon type="primary" />
                </div>
            </div>
        </article>
    );
}

export default OrderCard;