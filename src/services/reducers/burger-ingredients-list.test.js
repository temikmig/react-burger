import { ingredientsListReducer, initialState as ingredientsListInitialState } from './burger-ingredients-list';
import * as types from '../constants/burger-ingredients-list'
import { testBun, testIngredient_1, testIngredient_2, testIngredient_3 } from '../../utils/test-data';

describe('burger-ingredients-list reducer', () => {
    it('should handle GET_INGREDIENTS_LIST_SUCCESS', () => {    
        const initialState = {...ingredientsListInitialState};

        expect(ingredientsListReducer(initialState, { type: types.GET_INGREDIENTS_LIST_SUCCESS, ingredients: [testBun, testIngredient_1, testIngredient_2, testIngredient_3] })).toEqual({
            ...initialState,
            data: [testBun, testIngredient_1, testIngredient_2, testIngredient_3],
            isLoad: false,
            isError: false
        });
    });

    it('should handle GET_INGREDIENTS_LIST_REQUEST', () => {    
        const initialState = {...ingredientsListInitialState};

        expect(ingredientsListReducer(initialState, { type: types.GET_INGREDIENTS_LIST_REQUEST })).toEqual({
            ...initialState,
            data: null,
            isLoad: true,
            isError: false
        });
    });

    it('should handle GET_INGREDIENTS_LIST_ERROR', () => {    
        const initialState = {...ingredientsListInitialState};

        expect(ingredientsListReducer(initialState, { type: types.GET_INGREDIENTS_LIST_ERROR })).toEqual({
            ...initialState,
            data: null,
            isLoad: false,
            isError: true
        });
    });
});