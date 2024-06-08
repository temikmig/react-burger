export const ADD_INGREDIENT_DETAILS_MODAL = 'ADD_INGREDIENT_DETAILS_MODAL';
export const DEL_INGREDIENT_DETAILS_MODAL = 'DEL_INGREDIENT_DETAILS_MODAL';

export const addIngredientDetailsModal = ingredient => ({
    type: ADD_INGREDIENT_DETAILS_MODAL,
    payload: ingredient
});

export const delIngredientDetailsModal = _id => ({
    type: DEL_INGREDIENT_DETAILS_MODAL,
    payload: _id
});