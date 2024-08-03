import React, { FC, useEffect } from 'react';
import css from './feed-page.module.css';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { wsFeedConnectionClose, wsFeedConnectionStart } from '../../services/actions/ws-feed';
import { getIngredientsList } from '../../services/actions/burger-ingredients-list';
import { FeedOrdersList } from '../../components/feed/feed-orders-list/feed-orders-list';
import FeedOrdersInfo from '../../components/feed/feed-orders-info/feed-orders-info';

export const FeedPage:FC = () => {
    const { wsConnected, wsLoad, wsError } = useSelector((store) => store.wsFeed);
    const feedData = useSelector((store) => store.wsFeed.data);
    const orders = feedData.orders;
    const dispatch = useDispatch();

    useEffect(() => {
        if(!wsConnected) {
            dispatch(wsFeedConnectionStart());
        }
        return() => {
            dispatch(wsFeedConnectionClose());
        }
    }, [dispatch, wsFeedConnectionStart]);

    useEffect(()=>{
        dispatch(getIngredientsList());
      },[dispatch, getIngredientsList]);

    return(
        wsError ? 
            <main className={css.pageMain}>
                <h1 className={css.pageStatus}>Произошла ошибка при получении данных</h1>
            </main>
        :wsLoad ?
            <main className={css.pageMain}>
                <h1 className={css.pageStatus}>Загрузка...</h1>
            </main>
        :wsConnected&&
            <main className={css.pageMain}>
                <FeedOrdersList ordersList={orders} />
                <FeedOrdersInfo feedData={feedData} />
            </main>
    );
}