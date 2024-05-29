import React from 'react';
import IngredientItemStyles from './ingredient-item.module.css';

function IngredientItem() {
    return(
        <article className={IngredientItemStyles.ingredientItem}>
            <div>1</div>
            <div>2</div>
        </article>
    );
}

export default IngredientItem;