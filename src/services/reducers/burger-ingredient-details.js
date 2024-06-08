import { INGREDIENT_DETAILS_MODAL_ADD, INGREDIENT_DETAILS_MODAL_DEL } from '../actions/burger-ingredient-details';

const initialState = {
    ingredientData: []
};

export const ingredientDetails = (state = initialState, action) => { 
    switch (action.type) {
        case INGREDIENT_DETAILS_MODAL_ADD: return { 
            ...state, 
            ingredientData: action.payload.ingredient
        }

        case INGREDIENT_DETAILS_MODAL_DEL: return { 
            ...state, 
            ingredientData: []
        }

        default: return state;
    }
}