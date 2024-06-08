import { GET_INGREDIENTS_LIST_REQUEST, GET_INGREDIENTS_LIST_SUCCESS, GET_INGREDIENTS_LIST_ERROR } from '../actions/burger-ingredients-list';

const initialState = {
    data: [],
    isLoad: false,
    isError: false
};

export const ingredientsList = (state = initialState, action) => { 
    switch (action.type) {
        case GET_INGREDIENTS_LIST_SUCCESS: return { 
            ...state, 
            data: action.payload,
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