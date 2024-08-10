import { burgerOrderReducer, initialState as burgerOrderInitialState } from './burger-order';
import * as types from '../constants/burger-order'
import { testOrder } from '../../utils/test-data';

describe('burger-order reducer', () => {
    it('should handle GET_ORDER_SUCCESS', () => {    
        const initialState = {...burgerOrderInitialState};

        expect(burgerOrderReducer(initialState, { type: types.GET_ORDER_SUCCESS, orderData: testOrder })).toEqual({
            ...initialState,
            orderData: testOrder,
            isLoad: false,
            isError: false
        });
    });

    it('should handle GET_ORDER_REQUEST', () => {    
        const initialState = {...burgerOrderInitialState};

        expect(burgerOrderReducer(initialState, { type: types.GET_ORDER_REQUEST })).toEqual({
            ...initialState,
            orderData: [],
            isLoad: true,
            isError: false
        });
    });

    it('should handle GET_ORDER_ERROR', () => {    
        const initialState = {...burgerOrderInitialState};

        expect(burgerOrderReducer(initialState, { type: types.GET_ORDER_ERROR })).toEqual({
            ...initialState,
            orderData: [],
            isLoad: false,
            isError: true
        });
    });
});