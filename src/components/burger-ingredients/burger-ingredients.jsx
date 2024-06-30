import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import css from './burdger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'; 

import { useSelector, useDispatch } from 'react-redux';
import { getIngredientsList } from '../../services/actions/burger-ingredients-list';

import IngredientsGroup from './ingredients-group/ingredients-group';

const BurgerIngredients = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getIngredientsList());
    },[dispatch]);

    const { data, isLoad, isError } = useSelector(store => store.ingredientsList);

    const success = data.success;

    const list = data.data;

    const [current, setCurrent] = useState('bun');

    const bunRef = useRef(null);
    const sauceRef = useRef(null);
    const mainRef = useRef(null);

    function handleScroll(e) {
        const bunPos = bunRef.current.offsetTop;
        const saucePos = sauceRef.current.offsetTop;
        const mainPos = mainRef.current.offsetTop;

        const pos = (e.currentTarget.scrollTop + bunPos);

        if(pos>bunPos&&pos<saucePos) setCurrent('bun');
        if(pos>saucePos&&pos<mainPos) setCurrent('sauce');
        if(pos>mainPos) setCurrent('main');
    }

    if (isError) {
        return (
            <section className={css.BurgerIngredients}>
            <h1 className={css.loadState}>Произошла ошибка при получении данных</h1>
            </section>
        );
    } else if (isLoad) {
        return (
            <section className={css.BurgerIngredients}>
            <h1 className={css.loadState}>Загрузка...</h1>
            </section>
        );
    } else if(success) return (
        <section className={css.BurgerIngredients}>
            <h1 className={css.BurgerIngredientsHeader}>Соберите бургер</h1>
            <div style={{ display: 'flex' }} className="mt-5">
                <Tab value="bun" active={current === 'bun'} onClick={() => {setCurrent('bun'); bunRef.current.scrollIntoView({ behavior: "smooth" })}}>Булки</Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={() => {setCurrent('sauce'); sauceRef.current.scrollIntoView({ behavior: "smooth" })}}>Соусы</Tab>
                <Tab value="main" active={current === 'main'} onClick={() => {setCurrent('main'); mainRef.current.scrollIntoView({ behavior: "smooth" })}}>Начинка</Tab>
            </div>
            <section className={css.BurgerIngredientsList} onScroll={handleScroll}>
                <IngredientsGroup groupName="Булки" headRef={bunRef} groupList={list.filter((item) => item.type==='bun')}/>
                <IngredientsGroup groupName="Соусы" headRef={sauceRef} groupList={list.filter((item) => item.type==='sauce')}/>
                <IngredientsGroup groupName="Начинка" headRef={mainRef} groupList={list.filter((item) => item.type==='main')} />
            </section>
        </section>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.array
}

export default BurgerIngredients;