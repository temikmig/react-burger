export const INGREDIENT_ADD = 'INGREDIENT_ADD';
export const INGREDIENT_DEL = 'INGREDIENT_DEL';
export const INGREDIENTS_CLEAR = 'INGREDIENTS_CLEAR';
export const INGREDIENTS_MOVE = 'INGREDIENTS_MOVE';

export const ingredientAdd = ingredient => ({
    type: INGREDIENT_ADD,
    payload: ingredient
});

export const ingredientDel = uid => ({
    type: INGREDIENT_DEL,
    payload: uid
});

export const ingredientsClear = () => ({
    type: INGREDIENTS_CLEAR,
});

export const ingredientsMove = ({toIndex, fromIndex}) => ({
    type: INGREDIENTS_MOVE,
    payload: {toIndex, fromIndex}
});