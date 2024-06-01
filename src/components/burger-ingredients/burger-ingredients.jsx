import React from 'react';
import PropTypes from 'prop-types';
import css from './burdger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'; 

import IngredientsGroup from './ingredients-group/ingredients-group';

const BurgerIngredients = (props) => {
    const list = props.data;
    const [current, setCurrent] = React.useState('bun');

    return (
        <section className={css.BurgerIngredients}>
            <h1 className={css.BurgerIngredientsHeader}>Соберите бургер</h1>
            <div style={{ display: 'flex' }} className="mt-5">
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>Начинка</Tab>
            </div>
            <section className={css.BurgerIngredientsList}>
                <IngredientsGroup groupName="Булки" groupId="bun" groupList={list.filter((item) => item.type==='bun')}/>
                <IngredientsGroup groupName="Соусы" groupId="sauce" groupList={list.filter((item) => item.type==='sauce')}/>
                <IngredientsGroup groupName="Начинка" groupId="main" groupList={list.filter((item) => item.type==='main')} />
            </section>
        </section>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.array
}

export default BurgerIngredients;