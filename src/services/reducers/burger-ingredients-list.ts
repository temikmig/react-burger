import { TIngredient, TIngredientsList } from '../../utils/types';
import { 
    GET_INGREDIENTS_LIST_REQUEST, 
    GET_INGREDIENTS_LIST_SUCCESS, 
    GET_INGREDIENTS_LIST_ERROR 
} from '../constants/burger-ingredients-list';

export interface IActionTypes {
    ingredients: TIngredient[];
    type: string;
}

interface IIngredientsList {
    data: TIngredientsList | null;
    isLoad: boolean;
    isError: boolean;
}

export const initialState:IIngredientsList = {
    data: null,
    isLoad: false,
    isError: false
};

export const ingredientsListReducer = (state = initialState, action:IActionTypes) => { 
    switch (action.type) {
        case GET_INGREDIENTS_LIST_SUCCESS: return { 
            ...state, 
            data: action.ingredients,
            isLoad: false,
            isError: false
        }

        case GET_INGREDIENTS_LIST_REQUEST: return { 
            ...state, 
            data: null,
            isLoad: true,
            isError: false
        }

        case GET_INGREDIENTS_LIST_ERROR: return { 
            ...state, 
            data: null,
            isLoad: false,
            isError: true
        }

        default: return state;
    }
}