import { 
    ADD_INGREDIENT_DETAILS_MODAL, 
    DEL_INGREDIENT_DETAILS_MODAL 
} from '../actions/burger-ingredient-details';

import { IActionTypes } from '../../utils/interfaces';

interface IIngredientDetails {
    ingredientData: any;
}

const initialState:IIngredientDetails = {
    ingredientData: []
};

export const ingredientDetails = (state = initialState, action:IActionTypes) => { 
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