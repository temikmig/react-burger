import { ORDER_SUCCESS, ORDER_REQUEST, ORDER_ERROR } from '../actions/burger-order';

const initialState = {
    orderData: [],
    isLoad: false,
    isError: false
};

export const burgerOrder = (state = initialState, action) => { 
    switch (action.type) {
        case ORDER_SUCCESS: return { 
            ...state, 
            orderData: action.payload,
            isLoad: false,
            isError: false
        }

        case ORDER_REQUEST: return { 
            ...state, 
            orderData: [],
            isLoad: true,
            isError: false
        }

        case ORDER_ERROR: return { 
            ...state, 
            orderData: [],
            isLoad: false,
            isError: true
        }

        default: return state
    }
}