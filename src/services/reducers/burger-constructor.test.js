import { burgerConstructorReducer, initialState as burgerConstructorInitialState } from './burger-constructor';
import * as types from '../constants/burger-constructor'
import { testBun, testIngredient_1, testIngredient_2, testIngredient_3 } from '../../utils/test-data';

describe('burger-constructor reducer', () => {
    it('should handle ADD_INGREDIENT bun', () => {    
        const initialState = {...burgerConstructorInitialState};

        expect(burgerConstructorReducer(initialState, { type: types.ADD_INGREDIENT, ingredient: testBun })).toEqual({
            ...initialState,
            bun: testBun
        });
    });

    it('should handle ADD_INGREDIENT indgredient', () => {  
        const initialState = {...burgerConstructorInitialState};

        expect(burgerConstructorReducer(initialState, { type: types.ADD_INGREDIENT, ingredient: testIngredient_1 })).toEqual({
            ...initialState,
            ingredients: [
                ...initialState.ingredients,
                testIngredient_1
            ]
        });
    });

    it('should handle CLEAR_INGREDIENTS', () => {    
        const initialState = {...burgerConstructorInitialState, ingredients: [testIngredient_1, testIngredient_2] };

        expect(burgerConstructorReducer(initialState, { type: types.CLEAR_INGREDIENTS })).toEqual({
            ...initialState,
            ingredients: [],
            bun: null
        });
    });



    it('should handle DEL_INGREDIENT', () => {    
        const initialState = {...burgerConstructorInitialState, ingredients: [testIngredient_1, testIngredient_2] };

        expect(burgerConstructorReducer(initialState, { type: types.DEL_INGREDIENT, uid: 'test-uid-i-001' })).toEqual({
            ...initialState,
            ingredients: [testIngredient_2]
        });
    });

    it('should handle MOVE_INGREDIENTS', () => {    
        const initialState = {...burgerConstructorInitialState, ingredients: [testIngredient_1, testIngredient_2, testIngredient_3] };

        expect(burgerConstructorReducer(initialState, { type: types.MOVE_INGREDIENTS, fromIndex: 0, toIndex: 1 })).toEqual({
            ...initialState,
            ingredients: [testIngredient_2, testIngredient_1, testIngredient_3]
        });
    });
});