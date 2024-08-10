import { TOrder } from '../../utils/types';
import { 
    GET_ORDER_SUCCESS, 
    GET_ORDER_REQUEST, 
    GET_ORDER_ERROR 
} from '../constants/burger-order';

export interface IActionTypes {
    orderData: TOrder;
    type: string;
}
interface IBurgerOrder {
    orderData: TOrder[];
    isLoad: boolean;
    isError: boolean;
}

export const initialState:IBurgerOrder = {
    orderData: [],
    isLoad: false,
    isError: false
};

export const burgerOrderReducer = (state = initialState, action:IActionTypes) => { 
    switch (action.type) {
        case GET_ORDER_SUCCESS: return { 
            ...state, 
            orderData: action.orderData,
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