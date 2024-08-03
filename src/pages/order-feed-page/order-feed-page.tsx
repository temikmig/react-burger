import React, { FC } from 'react';
import css from './order-feed-page.module.css';

import OrderFeedDetails from '../../components/order-feed-details/order-feed-details';

export const OrderFeedPage:FC = () => {
    return(
        <main className={css.pageMain}>
            <section className={css.pageSection}>
                <OrderFeedDetails />
            </section>
        </main>
    );
}