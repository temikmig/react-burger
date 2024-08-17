import React, { FC } from "react";
import css from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from "react";

import { getOrder } from '../../services/actions/burger-order';

import { useDispatch, useSelector } from "../../services/types/hooks";
import { TIngredient } from "../../utils/types";

const OrderDetais:FC = () => {
    const dispatch = useDispatch();
    const { orderData, isLoad, isError } = useSelector((store) => store.burgerOrder);

    const orderBun = useSelector((store) => store.burgerConstructor.bun);
    const orderIngredients = useSelector((store) => store.burgerConstructor.ingredients);
    const orderCheck = orderIngredients.map((item:TIngredient) => item._id);

    if(orderBun) {
        orderCheck.push(orderBun._id);
        orderCheck.unshift(orderBun._id);
    }
  
    useEffect(()=> {
        if(orderCheck.length>0) dispatch(getOrder(orderCheck));    
    }, [dispatch])

    if (isError) {
        return <p className={css.burgerOrderDesc}>Произошла ошибка при получении данных</p>
    } else if (isLoad) {
        return <p className={css.burgerOrderDesc}>Загрузка...</p>
    } else return(
        <div className={css.burgerOrder}>
            <p className={css.burgerOrderNum}>{orderData.order.number}</p>
            <p className={css.burgerOrderDesc}>идентификатор заказа</p>
            <CheckMarkIcon type="primary" />
            <p className={css.burgerOrderDescTop}>Ваш заказ начали готовить</p>
            <p className={css.burgerOrderDescBottom}>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
}

// OrderDetais.propTypes = {}; 

export default OrderDetais;