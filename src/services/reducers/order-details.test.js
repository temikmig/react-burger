import { orderDetailsReducer, initialState as orderDetailsInitialState } from './order-details';
import * as types from '../constants/order-details'
import { testOrderData } from '../../utils/test-data';

describe('order-details reducer', () => {
    it('should handle GET_ORDER_DETAILS_SUCCESS', () => {    
        const initialState = {...orderDetailsInitialState};

        expect(orderDetailsReducer(initialState, { type: types.GET_ORDER_DETAILS_SUCCESS, orderData: testOrderData })).toEqual({
            ...initialState,
            data: testOrderData.orders[0],
            success: true,
            isLoad: false,
            isError: false
        });
    });

    it('should handle GET_ORDER_DETAILS_REQUEST', () => {    
        const initialState = {...orderDetailsInitialState};

        expect(orderDetailsReducer(initialState, { type: types.GET_ORDER_DETAILS_REQUEST })).toEqual({
            ...initialState,
            data: null,
            isLoad: true,
            isError: false
        });
    });

    it('should handle GET_ORDER_DETAILS_ERROR', () => {    
        const initialState = {...orderDetailsInitialState};

        expect(orderDetailsReducer(initialState, { type: types.GET_ORDER_DETAILS_ERROR })).toEqual({
            ...initialState,
            data: null,
            isLoad: false,
            isError: true
        });
    });
});