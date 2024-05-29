import React from 'react';
import IngredientsGroupStyles from './ingredients-group.module.css';
import IngredientItem from '../ingredient-item/ingredient-item';

function IngredientsGroup(props:any) {
    return (
        <section>
            <h2 className="text text_type_main-medium mt-10">{props.name}</h2>
            <div className={IngredientsGroupStyles.ingredientsGroupCont}>
                <IngredientItem />
                <IngredientItem />
                <IngredientItem />
                <IngredientItem />
                <IngredientItem />
                <IngredientItem />
                <IngredientItem />
            </div>
        </section>
    );
}

export default IngredientsGroup;