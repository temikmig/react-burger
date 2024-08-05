import React, { useState, useEffect, FC } from 'react';
import css from './profile-page-orders.module.css';
import { useDispatch, useSelector } from '../../../services/types/hooks';
import { wsConnectionClose, wsConnectionStart } from '../../../services/actions/ws';
import { getIngredientsList } from '../../../services/actions/burger-ingredients-list';
import { useLocation } from 'react-router-dom';
import { TFeedItem } from '../../../utils/types';
import FeedOrdersList from '../../../components/feed/feed-orders-list/feed-orders-list';
import { getCookie } from '../../../utils/utils';
import { WS_URL } from '../../../utils/config';

export const ProfilePageOrders:FC = () => {
    const location = useLocation();
    
    const { wsConnected, wsLoad, wsError, data } = useSelector((store) => store.ws);
    const storeIngredientsList = useSelector((store) => store.ingredientsList);

    const profileFeedData = data;
    const orders = profileFeedData?.orders;

    const [formattedOrder, setFormattedOrder] = useState<TFeedItem[]| null>(null);
    
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(wsConnectionStart(WS_URL+'?token='+getCookie('accessToken')));
        return() => {
            dispatch(wsConnectionClose());
        }
    }, [dispatch]);

    useEffect(()=>{
        if(storeIngredientsList.data===null) dispatch(getIngredientsList());
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
        :(wsConnected)&&
            <section className={css.ordersList}>
            <FeedOrdersList ordersList={orders} />
            </section>
    );
}