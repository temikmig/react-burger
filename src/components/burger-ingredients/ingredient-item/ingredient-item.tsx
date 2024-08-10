import React, { ComponentType, FC } from 'react';
import { useState } from 'react';
import css from './ingredient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import { addIngredientDetailsModal, delIngredientDetailsModal } from "../../../services/actions/burger-ingredient-details";
import { useDispatch, useSelector } from "../../../services/types/hooks";

import Modal from '../../modal/modal.jsx';
import IngredientDetails from '../../ingredient-details/ingredient-details';

import { useDrag } from "react-dnd";
import { TIngredient, TReadyBun, TReadyIngredients } from '../../../utils/types';

const IngredientItem:FC<any> = ( {data, groupType} ) => {

    const ingredient:TIngredient = data;

    // вынести
    const orderBun = useSelector((store) => store.burgerConstructor.bun);
    const orderIngredients = useSelector((store) => store.burgerConstructor.ingredients);
    const orderCheck = orderIngredients.map((item:TIngredient) => item._id);

    if(orderBun) {
        orderCheck.push(orderBun._id);
        orderCheck.unshift(orderBun._id);
    }
    //

    const currentCounter = orderCheck?.filter((item:string) => item===ingredient._id).length;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleOpenModal = () => {
        setIsModalOpen(true);

        dispatch(addIngredientDetailsModal(ingredient));
    }
    
    const handleCloseModal = () => {
        setIsModalOpen(false);

        dispatch(delIngredientDetailsModal(ingredient._id));
    }

    const [, ingredientDragRef] = useDrag({
        type: "constructorContainer",
        item: ingredient
    });

    return(
        <>
        <article ref={ingredientDragRef} className={css.ingredientItem} onClick={handleOpenModal}>
            <div className={css.ingredientImage}>
                <img src={ingredient.image} alt={ingredient.name} />
            </div>
            <div className={css.ingredientPrice}><CurrencyIcon type="primary" />{ingredient.price}</div>
            <h3 className={css.ingredientName}>{ingredient.name}</h3>
            {currentCounter>0&&<Counter count={currentCounter} size="default" extraClass="m-1" />}
        </article>
        </>
    );
}

export default IngredientItem;