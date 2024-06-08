import { GET_ORDER_SUCCESS, GET_ORDER_REQUEST, GET_ORDER_ERROR } from '../actions/burger-order';

const initialState = {
    orderData: [],
    isLoad: false,
    isError: false
};

export const burgerOrder = (state = initialState, action) => { 
    switch (action.type) {
        case GET_ORDER_SUCCESS: return { 
            ...state, 
            orderData: action.payload,
            isLoad: false,
            isError: false
        }

        case GET_ORDER_REQUEST: return { 
            ...state, 
            orderData: [],
            isLoad: true,
            isError: false
        }

        case GET_ORDER_ERROR: return { 
            ...state, 
            orderData: [],
            isLoad: false,
            isError: true
        }

        default: return state
    }
}