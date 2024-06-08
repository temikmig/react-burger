

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DEL_INGREDIENT = 'DEL_INGREDIENT';
export const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';
export const MOVE_INGREDIENTS = 'MOVE_INGREDIENTS';

export const addIngredient = ingredient => ({
    type: ADD_INGREDIENT,
    payload: ingredient
});

export const delIngredient = uid => ({
    type: DEL_INGREDIENT,
    payload: uid
});

export const clearIngredients = () => ({
    type: CLEAR_INGREDIENTS,
});

export const moveIngredients = ({toIndex, fromIndex}) => ({
    type: MOVE_INGREDIENTS,
    payload: {toIndex, fromIndex}
});