import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ingredient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import { addIngredientDetailsModal, delIngredientDetailsModal } from "../../../services/actions/burger-ingredient-details";
import { useDispatch, useSelector } from "react-redux";

import Modal from '../../modal/modal.jsx';
import IngredientDetails from '../../ingredient-details/ingredient-details';

import { useDrag } from "react-dnd";

function IngredientItem( { data } ) {
    const ingredient = {
        _id: data._id,
        name: data.name,
        type: data.type,
        proteins: data.proteins,
        fat: data.fat,
        carbohydrates: data.carbohydrates,
        calories: data.calories,
        price: data.price,
        image: data.image,
        image_mobile: data.image_mobile,
        image_large: data.image_large
    };

    // вынести
    const orderBun = useSelector(store => store.burgerConstructor.bun);
    const orderIngredients = useSelector(store => store.burgerConstructor.ingredients);
    const orderCheck = orderIngredients.map(item => item._id);

    if(orderBun) {
        orderCheck.push(orderBun._id);
        orderCheck.unshift(orderBun._id);
    }
    //

    const currentCounter = orderCheck.filter(item => item===ingredient._id).length;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleOpenModal = () => {
        setIsModalOpen(true);

        dispatch(addIngredientDetailsModal({
            ingredient: ingredient
        }));
    }
    
    const handleCloseModal = () => {
        setIsModalOpen(false);

        dispatch(delIngredientDetailsModal({
            ingredient: ingredient._id
        }));
    }

    const [, ingredientDragRef] = useDrag({
        type: "constructorContainer",
        item: ingredient
    });

    return(
        <>
        <article ref={ingredientDragRef} className={css.ingredientItem} onClick={handleOpenModal}>
            <div className={css.ingredientImage}>
                <img src={data.image} alt={ingredient.name} />
            </div>
            <div className={css.ingredientPrice}><CurrencyIcon type="primary" />{ingredient.price}</div>
            <h3 className={css.ingredientName}>{ingredient.name}</h3>
            {currentCounter>0&&<Counter count={currentCounter} size="default" extraClass="m-1" />}
        </article>
{isModalOpen && <Modal cont={<IngredientDetails />} header="Детали ингредиента" handleCloseThis={handleCloseModal} />}
        </>
    );
}

IngredientItem.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string
    })
}

export default IngredientItem;