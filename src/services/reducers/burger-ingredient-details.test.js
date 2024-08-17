import { ingredientDetailsReducer, initialState as ingredientDetailsInitialState } from './burger-ingredient-details';
import * as types from '../constants/burger-ingredient-details'
import { testIngredient_1 } from '../../utils/test-data';

describe('burger-ingredient-details reducer', () => {
    it('should handle ADD_INGREDIENT_DETAILS_MODAL', () => {    
        const initialState = {...ingredientDetailsInitialState};

        expect(ingredientDetailsReducer(initialState, { type: types.ADD_INGREDIENT_DETAILS_MODAL, ingredient: testIngredient_1 })).toEqual({
            ...initialState,
            ingredientData: testIngredient_1
        });
    });

    it('should handle DEL_INGREDIENT_DETAILS_MODAL', () => {  
        const initialState = {...ingredientDetailsInitialState, ingredientData: testIngredient_1 };

        expect(ingredientDetailsReducer(initialState, { type: types.DEL_INGREDIENT_DETAILS_MODAL })).toEqual({
            ...initialState,
            ingredientData: []
        });
    });
});