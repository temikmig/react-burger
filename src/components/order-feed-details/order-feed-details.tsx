import React, { FC, useCallback, useEffect, useState } from "react";
import css from './order-feed-details.module.css';
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../services/actions/order-details";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { TIngredient } from "../../utils/types";
import uuid from "react-uuid";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderFeedDetailsIngredient from "./order-feed-details-ingredient/order-feed-details-ingredient";

const OrderFeedDetais:FC = () => {
    const { number } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getOrderDetails(number));
    },[dispatch, getOrderDetails]);

    const { data, isLoad, isError, success } = useSelector((store) => store.orderDetails);
    const orderIngredients = data.ingredients;

    const allIngredientsList = useSelector((store) => store.ingredientsList.data.data);

    const ingredientsList = orderIngredients?.map((currentIngredientId:string, index:number) => allIngredientsList?.find((item:TIngredient) => (item._id===currentIngredientId)));

    const uniqIngredientsList = ingredientsList?.reduce((acc:any, item:TIngredient) => {
        if (acc.includes(item)) {
          return acc;
        }
        return [...acc, item];
      }, []);

    const [orderPrice, setOrderPrice] = useState(0);

    useEffect(
        () => {
          let total = 0;
          ingredientsList?.map((item:TIngredient) => (total += item.price));
          setOrderPrice(total);
        },
        [ingredientsList, setOrderPrice]
    );

    const countsOfIngredients = orderIngredients?.reduce((count:any, id:string) => {
        count[id] = (count[id] || 0) + 1;
        return count;
    }, {});

    const renderIngredients = useCallback((ingredient:TIngredient, index:number, countsOfIngredients:number) => {
        return (<OrderFeedDetailsIngredient currentIngredient={ingredient} countInOrder={countsOfIngredients} key={uuid()} index={index}/>)
    }, []);

    return (
        isError ? 
            <section className={css.OrderFeedDetails}>
                <h1 className={css.OrderFeedDetailsName}>Произошла ошибка при получении данных</h1>
            </section>
        :isLoad ?
            <section className={css.OrderFeedDetails}>
                <h1 className={css.OrderFeedDetailsName}>Загрузка...</h1>
            </section>
        :success&&
            <section className={css.OrderFeedDetails}>
                <p className={css.OrderFeedDetailsNumber}>#{data.number}</p>
                <h1 className={css.OrderFeedDetailsName}>{data.name}</h1>
                {(data.status==='created')&&<p className={css.OrderFeedDetailsStatusCreated}>Создан</p>}
                {(data.status==='pending')&&<p className={css.OrderFeedDetailsStatusPending}>Готовится</p>}
                {(data.status==='done')&&<p className={css.OrderFeedDetailsStatusDone}>Выполнен</p>}
                <h2 className={css.OrderFeedDetailsName}>Состав:</h2>
                <section className={css.orderFeedDetailsIngredients}>
                    {uniqIngredientsList.length>0&&
                    uniqIngredientsList?.map((ingredient:TIngredient, index:number) => renderIngredients(ingredient, index, countsOfIngredients[ingredient._id]))
                    }
                </section>
                <section className={css.orderFeedDetailsInfo}>
                    <p className={css.orderFeedDetailsInfoDate}><FormattedDate date={new Date(data.createdAt)} /></p>
                    <p className={css.orderFeedDetailsInfoPrice}>{orderPrice}<CurrencyIcon type="primary" /></p>
                </section>
            </section>
        );
}

export default OrderFeedDetais;

