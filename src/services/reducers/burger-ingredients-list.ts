import { TIngredient } from '../../utils/types';
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
    data: any;
    isLoad: boolean;
    isError: boolean;
}

const initialState:IIngredientsList = {
    data: [],
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
            data: [],
            isLoad: true,
            isError: false
        }

        case GET_INGREDIENTS_LIST_ERROR: return { 
            ...state, 
            data: [],
            isLoad: false,
            isError: true
        }

        default: return state;
    }
}