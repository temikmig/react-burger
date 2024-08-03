import { TFeedItem, TIngredient, TOrderDetails } from '../../utils/types';
import {
    GET_ORDER_DETAILS_REQUEST,
    GET_ORDER_DETAILS_SUCCESS,
    GET_ORDER_DETAILS_ERROR
} from "../constants/order-details";

export interface IActionTypes {
    orderData: TOrderDetails;
    type: string;
}

interface IOrderDetails {
    data: any;
    success: boolean;
    isLoad: boolean;
    isError: boolean;
}

const initialState:IOrderDetails = {
    data: [],
    success: false,
    isLoad: false,
    isError: false
};

export const OrderDetailsReducer = (state = initialState, action:IActionTypes) => { 
    switch (action.type) {
        case GET_ORDER_DETAILS_SUCCESS: return { 
            ...state, 
            data: action.orderData.orders[0],
            success: true,
            isLoad: false,
            isError: false
        }

        case GET_ORDER_DETAILS_REQUEST: return { 
            ...state, 
            data: [],
            isLoad: true,
            isError: false
        }

        case GET_ORDER_DETAILS_ERROR: return { 
            ...state, 
            data: [],
            isLoad: false,
            isError: true
        }

        default: return state;
    }
}