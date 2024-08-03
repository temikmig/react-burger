import React, { FC, useEffect } from 'react';
import css from './feed-orders-info.module.css';
import { useDispatch, useSelector } from '../../../services/types/hooks';
import { OrderCard } from '../../order-card/order-card'
import { TFeedItem, TFeedOrders } from '../../../utils/types';

export const FeedOrdersInfo:FC<TFeedOrders> = ({feedData}) => {
    const feedOrderDone = feedData.orders?.filter((item:TFeedItem) => (item.status==='done'));
    const feedOrderPending = feedData.orders?.filter((item:TFeedItem) => (item.status==='pending'||item.status==='created'));

    return(
        <section className={css.feedOrderInfo}>
            <article className={css.feedOrdersStatusInfo}>
                <article className={css.feedOrdersStatusInfoCont}>
                    <h1 className={css.feedOrdersStatusInfoContHead}>Готовы:</h1>
                    <div className={css.feedOrdersStatusInfoContBlockReady}>
                        <div className={css.feedOrdersStatusInfoContBlockColumn}>
                            {feedOrderDone?.map((item:TFeedItem, index:number) =>
                                index<10&&<p className={css.feedOrdersStatusInfoContBlockItem} key={index}>{item.number}</p>
                            )}
                        </div>
                        <div className={css.feedOrdersStatusInfoContBlockColumn}>
                            {feedOrderDone?.map((item:TFeedItem, index:number) =>
                                index>9&&index<20&&<p className={css.feedOrdersStatusInfoContBlockItem} key={index}>{item.number}</p>
                            )}
                        </div>
                    </div>
                </article>
                <article className={css.feedOrdersStatusInfoCont}>
                    <h1 className={css.feedOrdersStatusInfoContHead}>В работе:</h1>
                    <div className={css.feedOrdersStatusInfoContBlockPending}>
                    <div className={css.feedOrdersStatusInfoContBlockColumn}>
                            {feedOrderPending?.map((item:TFeedItem, index:number) =>
                                index<10&&<p className={css.feedOrdersStatusInfoContBlockItem} key={index}>{item.number}</p>
                            )}
                        </div>
                        <div className={css.feedOrdersStatusInfoContBlockColumn}>
                            {feedOrderPending?.map((item:TFeedItem, index:number) =>
                                index>9&&index<20&&<p className={css.feedOrdersStatusInfoContBlockItem} key={index}>{item.number}</p>
                            )}
                        </div>
                    </div>
                </article>
            </article>
            <article className={css.feedOrdersCount}>
                <h1 className={css.feedOrdersCountHeader}>Выполнено за все время:</h1>
                <p className={css.feedOrdersCountContent}>{feedData.total}</p>
            </article>
            <article className={css.feedOrdersCount}>
                <h1 className={css.feedOrdersCountHeader}>Выполнено за сегодня:</h1>
                <p className={css.feedOrdersCountContent}>{feedData.totalToday}</p>
            </article>
        </section>
    );
}

export default FeedOrdersInfo;