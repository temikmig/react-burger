import { TIngredient } from "../../utils/types";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DEL_INGREDIENT = 'DEL_INGREDIENT';
export const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';
export const MOVE_INGREDIENTS = 'MOVE_INGREDIENTS';

export const addIngredient = (ingredient:any) => ({
    type: ADD_INGREDIENT,
    payload: ingredient
});

export const delIngredient = (uid:any) => ({
    type: DEL_INGREDIENT,
    payload: uid
});

export const clearIngredients = () => ({
    type: CLEAR_INGREDIENTS,
});

export const moveIngredients = (toIndex:any, fromIndex?:any) => ({
    type: MOVE_INGREDIENTS,
    payload: {toIndex, fromIndex}
});