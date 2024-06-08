import React from 'react';
import { useState, useCallback } from 'react';
import css from './burger-constructor.module.css';
import { Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'; 

import { ingredientAdd, ingredientsClear, ingredientsMove } from "../../services/actions/burger-constructor";

import { orderGet } from "../../services/actions/burger-order";
import { useDispatch, useSelector } from "react-redux";

import { useDrop } from 'react-dnd';

import BurgerConstructorItem from './burger-constructor-item/burger-constructor-item';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

const BurgerConstructor = () => {
    const currentBun = useSelector(store => store.burgerConstructor.bun);
    const ingredients = useSelector(store => store.burgerConstructor.ingredients);

    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        dispatch(orderGet());
        setIsModalOpen(true);
    }
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        dispatch(ingredientsClear());
    }

    const orderPriceVal = useSelector(store => {
        let priceVal = 0;

        if(currentBun) priceVal = priceVal + currentBun.price*2;

        if(ingredients.length>0) ingredients.forEach(item => {priceVal = priceVal + item.price});

        return priceVal;
    });

    const [, constructorDropRef] = useDrop({
        accept: "constructorContainer",
        drop(item) {
            dispatch(ingredientAdd({
                ingredient: item
            }));
        },
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
    });

    const moveIngredient = useCallback((toIndex, fromIndex) => {
        dispatch(ingredientsMove({
            toIndex: toIndex,
            fromIndex: fromIndex
        }));
    }, [dispatch])

    const renderIngredients = useCallback((currentIngredient, index) => {
        return (
            <BurgerConstructorItem currentIngredient={currentIngredient} key={currentIngredient.uid} index={index} moveIngredient={moveIngredient}/>
        )
    }, [moveIngredient])

    return (
        <>
        <section ref={constructorDropRef} className={css.burgerConstructor}>
            <div className={css.burgerConstructorCont}>
                <div className={css.burgerIngredientsListFixItem}>
                    {currentBun ?
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={currentBun.name}
                        price={currentBun.price}
                        thumbnail={currentBun.image}
                    />
                    :
                    <div className={`${css.BurderIngredientsEmpty} ${css.BurderIngredientsEmptyTop}`}>Перетащите булку</div>
                    }
                </div>
                <div className={css.burgerIngredientsList}>
                {ingredients.length>0?
                  ingredients.map((currentIngredient, index) => renderIngredients(currentIngredient, index))
                    :
                    <div className={`${css.BurderIngredientsEmptyList}`}>Перетащите ингредиенты</div>
                    }
                </div>
                <div className={css.burgerIngredientsListFixItem}>
                    {currentBun ?
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={currentBun.name}
                        price={currentBun.price}
                        thumbnail={currentBun.image}
                    />
                    :
                    <div className={`${css.BurderIngredientsEmpty} ${css.BurderIngredientsEmptyBottom}`}>Перетащите булку</div>
                    }
                </div>
            </div>
            <div className={css.burgerOrder}>
                <div className={css.burgerOrderPrice}>{orderPriceVal}<CurrencyIcon type="primary" /></div>
                <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>Оформить заказ</Button>
            </div>
        </section>
        {isModalOpen && <Modal cont={<OrderDetails />} handleCloseThis={handleCloseModal} />}
        </>
    );
}

export default BurgerConstructor;