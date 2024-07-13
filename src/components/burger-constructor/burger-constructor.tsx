import React, { FC } from 'react';
import { useState, useCallback } from 'react';
import css from './burger-constructor.module.css';
import { Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'; 

import { addIngredient, clearIngredients, moveIngredients } from "../../services/actions/burger-constructor";

import { getOrder } from "../../services/actions/burger-order";
import { useDispatch, useSelector } from "react-redux";

import { useDrop } from 'react-dnd';

import BurgerConstructorItem from './burger-constructor-item/burger-constructor-item';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

import uuid from 'react-uuid';

import { useNavigate } from 'react-router-dom';

import { AppDispatch, TIngredient, TReadyBun, TReadyIngredients, TUserData } from '../../utils/types';

const BurgerConstructor: FC = () => {
    const navigate = useNavigate();
    const currentBun = useSelector((store:TReadyBun) => store.burgerConstructor.bun);
    const ingredients = useSelector((store:TReadyIngredients) => store.burgerConstructor.ingredients);
    const { userLoggedIn } = useSelector((store:TUserData) => store.userData);

    const dispatch:AppDispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        if(userLoggedIn) {
            dispatch(getOrder());
            setIsModalOpen(true);
        } else navigate('/login');
    }
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        dispatch(clearIngredients());
    }

    const orderPriceVal:any = useSelector<any>(store => {
        let priceVal = 0;

        if(currentBun) priceVal = priceVal + currentBun.price*2;

        if(ingredients.length>0) ingredients.forEach((item:TIngredient) => {priceVal = priceVal + item.price});

        return priceVal;
    });

    const [{isHover}, constructorDropRef] = useDrop({
        accept: "constructorContainer",
        drop(item:TIngredient) {
            dispatch(addIngredient({
                ingredient: {...item, uid: uuid()}
            }));
        },
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
    });

    const moveIngredient = useCallback((toIndex:number, fromIndex:number) => {
        dispatch(moveIngredients({
            toIndex: toIndex,
            fromIndex: fromIndex
        }));
    }, [dispatch])

    const renderIngredients = useCallback((currentIngredient:TIngredient, index:number) => {
        return (
            <BurgerConstructorItem currentIngredient={currentIngredient} key={currentIngredient.uid} index={index} moveIngredient={moveIngredient}/>
        )
    }, [moveIngredient])

    return (
        <>
        <section ref={constructorDropRef} className={`${css.burgerConstructor} ${isHover ? css.burgerConstructorContHover : ''}`}>
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
                  ingredients.map((currentIngredient:TIngredient, index:number) => renderIngredients(currentIngredient, index))
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