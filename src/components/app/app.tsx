import React from 'react';
import { useState, useEffect } from 'react';
import AppStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

export default function App() {
    const burgerApi = 'https://norma.nomoreparties.space/api/ingredients';

    const [state, setState] = useState({
        isLoading: false,
        hasError: false,
        data: []
    });
    
    const getBurgers = () => {
        setState({ ...state, hasError: false, isLoading: true });
        fetch(burgerApi)
          .then(res => res.json())
          .then(data => setState({ ...state, data, isLoading: false }))
          .catch(e => {
            setState({ ...state, hasError: true, isLoading: false });
          });
    };
    
    useEffect(() => {
        getBurgers();
    }, []);

    const { data, isLoading, hasError } = state;

    return (
        <>
            <AppHeader />
            <main className={AppStyles.appMain}>
                <BurgerIngredients  />
                <BurgerConstructor />
            </main>
        </>
    );
}
