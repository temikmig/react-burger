import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './burger-constructor.module.css';
import { Button, ConstructorElement, DragIcon, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'; 

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

const BurgerConstructor = ( {currentBun, ingredients} ) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    return (
        <>
        <section className={css.burgerConstructor}>
            <div className={css.burgerConstructorCont}>
                <div className={css.burgerIngredientsListFixItem}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={currentBun.name}
                        price={currentBun.price}
                        thumbnail={currentBun.image}
                    />
                </div>
                <div className={css.burgerIngredientsList}>
                  {ingredients.map((currentIngredient, index) => 
                  <div key={index} className={css.burgerIngredientsListItem}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text={currentIngredient.name}
                        price={currentIngredient.price}
                        thumbnail={currentIngredient.image}
                        />
                    </div>
                    )}
                </div>
                <div className={css.burgerIngredientsListFixItem}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={currentBun.name}
                        price={currentBun.price}
                        thumbnail={currentBun.image}
                    />
                </div>
            </div>
            <div className={css.burgerOrder}>
                <div className={css.burgerOrderPrice}>{610}<CurrencyIcon type="primary" /></div>
                <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>Оформить заказ</Button>
            </div>
        </section>
        {isModalOpen && <Modal cont={<OrderDetails />} handleClose={handleCloseModal} />}
        </>
    );
}

BurgerConstructor.propTypes = {
    currentBun: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
    }),
    ingredients: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
    })
}; 

export default BurgerConstructor;