import React, { FC, useEffect } from 'react';
import css from './feed-page.module.css';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { wsConnectionClose, wsConnectionStart } from '../../services/actions/ws';
import { getIngredientsList } from '../../services/actions/burger-ingredients-list';
import { FeedOrdersList } from '../../components/feed/feed-orders-list/feed-orders-list';
import FeedOrdersInfo from '../../components/feed/feed-orders-info/feed-orders-info';
import { WS_URL } from '../../utils/config';

export const FeedPage:FC = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getIngredientsList());
    },[dispatch, getIngredientsList]);

    useEffect(() => {
            dispatch(wsConnectionStart(WS_URL+'/all'));
        return() => {
            dispatch(wsConnectionClose());
        }
    }, [dispatch, wsConnectionStart]);

    const { wsConnected, wsLoad, wsError, data } = useSelector((store) => store.ws);
    const orders = data?.orders;

    return(
        wsError ? 
            <main className={css.pageMain}>
                <h1 className={css.pageStatus}>Произошла ошибка при получении данных</h1>
            </main>
        :wsLoad ?
            <main className={css.pageMain}>
                <h1 className={css.pageStatus}>Загрузка...</h1>
            </main>
        :(wsConnected)&&
            <main className={css.pageMain}>
                <FeedOrdersList ordersList={orders} ordersListHeader="Лента заказов" />
                <FeedOrdersInfo feedData={data} />
            </main>
    );
}