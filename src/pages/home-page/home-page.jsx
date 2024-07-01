import React from 'react';
import css from './home-page.module.css';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';

export const HomePage = () => {
    return(
        <>
            <main className={css.homeMain}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients data={[]} />
                    <BurgerConstructor />
                </DndProvider>
            </main>
        </>
    );
}