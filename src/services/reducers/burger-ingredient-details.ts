import { TIngredient } from '../../utils/types';
import { 
    ADD_INGREDIENT_DETAILS_MODAL, 
    DEL_INGREDIENT_DETAILS_MODAL 
} from '../constants/burger-ingredient-details';

export interface IActionTypes {
    ingredient: TIngredient;
    ingredientData: TIngredient;
    type: string;
}
interface IIngredientDetails {
    ingredientData: any;
}

const initialState:IIngredientDetails = {
    ingredientData: []
};

export const ingredientDetailsReducer = (state = initialState, action:IActionTypes) => { 
    switch (action.type) {
        case ADD_INGREDIENT_DETAILS_MODAL: return { 
            ...state, 
            ingredientData: action.ingredient
        }

        case DEL_INGREDIENT_DETAILS_MODAL: return { 
            ...state, 
            ingredientData: []
        }

        default: return state;
    }
}