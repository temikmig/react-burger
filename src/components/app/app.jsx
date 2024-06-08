import React from 'react';
import css from './app.module.css';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

const App = () => {
    return (
        <>
            <AppHeader />
            <main className={css.appMain}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients data={[]} />
                    <BurgerConstructor />
                </DndProvider>
            </main>
        </>
            );
}

 export default App;
