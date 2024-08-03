import React, { useState, useEffect, FC } from 'react';
import css from './profile-page-orders.module.css';
import { useDispatch, useSelector } from '../../../services/types/hooks';

import OrderCard from '../../../components/order-card/order-card';
import { wsProfileFeedConnectionClose, wsProfileFeedConnectionStart } from '../../../services/actions/ws-profile-feed';
import { getIngredientsList } from '../../../services/actions/burger-ingredients-list';
import { Link, useLocation } from 'react-router-dom';
import { TFeedItem } from '../../../utils/types';

export const ProfilePageOrders:FC = () => {
    const location = useLocation();
    
    const { wsConnected, wsLoad, wsError, data } = useSelector((store) => store.wsProfileFeed);
    const profileFeedData = useSelector((store) => store.wsProfileFeed.data);
    const orders = profileFeedData.orders;

    const [formattedOrder, setFormattedOrder] = useState<any| null>(null);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(!wsConnected) {
            dispatch(wsProfileFeedConnectionStart());
        }
        return() => {
            dispatch(wsProfileFeedConnectionClose());
        }
    }, [dispatch, wsProfileFeedConnectionStart]);

    useEffect(()=>{
        dispatch(getIngredientsList());
    },[dispatch, getIngredientsList]);

    useEffect(() => {
        setFormattedOrder( orders?.reverse() );
    }, [orders]);

    return(
        wsError ? 
            <section className={css.ordersList}>
                <h1 className={css.ordersListStatus}>Произошла ошибка при получении данных</h1>
            </section>
        :wsLoad ?
            <section className={css.ordersList}>
                <h1 className={css.ordersListStatus}>Загрузка...</h1>
            </section>
        :wsConnected&&
            <section className={css.ordersList}>
            {orders?.map((orderItem:TFeedItem, index:number)=> 
            <Link to={`/profile/orders/`+orderItem.number} key={orderItem._id} state={{background: location}}>
                <OrderCard currentOrder={orderItem} key={orderItem._id} index={index} />
            </Link>
            )}
            </section>
    );
}