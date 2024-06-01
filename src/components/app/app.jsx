import React from 'react';
import { useState, useEffect } from 'react';
import css from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

const App = () => {
    const [list, setList] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    const BURGERAPI = "https://norma.nomoreparties.space/api";
    
    const checkReponse = (res) => {
        return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
    };

  useEffect(()=>{
    fetch(`${BURGERAPI}/ingredients`)
          .then(checkReponse).then(
            (result) => {      
              setList(result.data);
              setIsLoad(true);

             
            })
          .catch( error =>
              {setIsLoad(false);
              alert("Error");
            });
  },[]);

    return (
        <>
            <AppHeader />
            {isLoad &&
            <main className={css.appMain}>
                <BurgerIngredients data={list} />
                <BurgerConstructor currentBun={list[0]} ingredients={list.slice(1,5)} />
            </main>
            }
        </>
            );
}

 export default App;
