import { INGREDIENTS_LIST_REQUEST, INGREDIENTS_LIST_SUCCESS, INGREDIENTS_LIST_ERROR } from '../actions/burger-ingredients-list';

const initialState = {
    data: [],
    isLoad: false,
    isError: false
};

export const ingredientsList = (state = initialState, action) => { 
    switch (action.type) {
        case INGREDIENTS_LIST_SUCCESS: return { 
            ...state, 
            data: action.payload,
            isLoad: false,
            isError: false
        }

        case INGREDIENTS_LIST_REQUEST: return { 
            ...state, 
            data: [],
            isLoad: true,
            isError: false
        }

        case INGREDIENTS_LIST_ERROR: return { 
            ...state, 
            data: [],
            isLoad: false,
            isError: true
        }

        default: return state;
    }
}