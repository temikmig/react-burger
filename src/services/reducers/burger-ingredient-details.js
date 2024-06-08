import { ADD_INGREDIENT_DETAILS_MODAL, DEL_INGREDIENT_DETAILS_MODAL } from '../actions/burger-ingredient-details';

const initialState = {
    ingredientData: []
};

export const ingredientDetails = (state = initialState, action) => { 
    switch (action.type) {
        case ADD_INGREDIENT_DETAILS_MODAL: return { 
            ...state, 
            ingredientData: action.payload.ingredient
        }

        case DEL_INGREDIENT_DETAILS_MODAL: return { 
            ...state, 
            ingredientData: []
        }

        default: return state;
    }
}