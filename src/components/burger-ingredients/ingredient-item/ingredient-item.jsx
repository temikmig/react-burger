import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ingredient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../../modal/modal.jsx';
import IngredientDetails from '../../ingredient-details/ingredient-details';

function IngredientItem( {data, currentCounter} ) {
    const ingredient = {
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return(
        <>
        <article className={css.ingredientItem} onClick={handleOpenModal}>
            <div className={css.ingredientImage}>
                <img src={data.image} alt="img" />
            </div>
            <div className={css.ingredientPrice}><CurrencyIcon type="primary" />{ingredient.price}</div>
            <h3 className={css.ingredientName}>{ingredient.name}</h3>
            {currentCounter>0&&<Counter count={currentCounter} size="default" extraClass="m-1" />}
        </article>
{isModalOpen && <Modal cont={<IngredientDetails data={ingredient} />} header="Детали ингредиента" handleClose={handleCloseModal} />}
        </>
    );
}

IngredientItem.propTypes = {
    counter: PropTypes.number,
    data: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
}

export default IngredientItem;