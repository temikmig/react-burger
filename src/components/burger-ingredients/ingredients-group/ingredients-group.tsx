import React, { FC } from 'react';
import css from './ingredients-group.module.css';

import IngredientItem from '../ingredient-item/ingredient-item';

import { Link, useLocation } from 'react-router-dom';
import { TIngredient, TIngredientsGroup } from '../../../utils/types';

const IngredientsGroup:FC<TIngredientsGroup> = ({ groupName, groupList, headRef }) => {
    const location = useLocation();

    return (
        <section className={css.ingredientsGroup} ref={headRef}>
            <h2 className={css.ingredientsGroupHeader}>{groupName}</h2>
            <div className={css.ingredientsGroupContent}>
                {groupList.map((item:TIngredient, index:number) => 
                <Link to={`/ingredients/`+item._id} key={item._id} state={{background: location}}>
                    <IngredientItem data={item} />
                </Link> 
                )}
            </div>
        </section>
    );
}

export default IngredientsGroup;