import React from 'react';
import BurgerIngredientsStyles from 'burdger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'; 

import IngredientsGroup from './ingredients-group/ingredients-group';

const BurgerIngredients = () => {
    const [current, setCurrent] = React.useState('one');

    return (
        <section className="mr-10">
            <h1 className="text text_type_main-large mt-10">Соберите бургер</h1>
            <div style={{ display: 'flex' }} className="mt-5">
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>Булки</Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>Соусы</Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>Начинка</Tab>
            </div>
            <IngredientsGroup name="Булки" />
            <IngredientsGroup name="Соусы" />
            <IngredientsGroup name="Начинка" />
        </section>
    );
}

export default BurgerIngredients;