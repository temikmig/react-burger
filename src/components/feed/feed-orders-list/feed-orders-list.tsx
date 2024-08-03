import React, { FC } from 'react';
import css from './feed-orders-list.module.css';
import { OrderCard } from '../../order-card/order-card'
import { Link, useLocation } from 'react-router-dom';
import { TFeedItem, TFeedOrdersList } from '../../../utils/types';

export const FeedOrdersList:FC<TFeedOrdersList> = ({ordersList}) => {
    const location = useLocation();

    return(
        <section className={css.feedOrderList}>
            <h1 className={css.feedOrderListHead}>Лента заказов</h1>
            <div className={css.feedOrderListCont}>
        {ordersList?.map((orderItem:TFeedItem, index:number)=> 
        <Link to={`/feed/`+orderItem.number} key={orderItem._id} state={{background: location}}>
            <OrderCard currentOrder={orderItem} key={orderItem._id} index={index} />
        </Link>
        )}
        </div>
        </section>
    );
}

export default FeedOrdersList;