export const INGREDIENT_DETAILS_MODAL_ADD = 'INGREDIENT_DETAILS_MODAL_ADD';
export const INGREDIENT_DETAILS_MODAL_DEL = 'INGREDIENT_DETAILS_MODAL_DEL';

export const ingredientDetailsModalAdd = ingredient => ({
    type: INGREDIENT_DETAILS_MODAL_ADD,
    payload: ingredient
});

export const ingredientDetailsModalDel = _id => ({
    type: INGREDIENT_DETAILS_MODAL_DEL,
    payload: _id
});