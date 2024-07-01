import React from 'react';
import css from './ingredient-page.module.css';

import IngredientDetails from '../../components/ingredient-details/ingredient-details';

export const IngredientPage = () => {
    return(
        <>
            <main className={css.pageMain}>
                <section className={css.pageSection}>
                    <h1 className={css.pageHeader}>Детали ингредиента</h1>
                    <IngredientDetails />
                </section>
            </main>
        </>
    );
}