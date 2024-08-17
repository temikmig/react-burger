import { 
    ADD_INGREDIENT, 
    DEL_INGREDIENT, 
    CLEAR_INGREDIENTS, 
    MOVE_INGREDIENTS 
} from '../constants/burger-constructor';

import { TIngredient } from '../../utils/types';
import { TIngredientsActions } from '../actions/burger-constructor';

interface IBurgerConstructor {
    bun: TIngredient | null;
    ingredients: TIngredient[];
}

export const initialState:IBurgerConstructor = {
    bun: null,
    ingredients: []
};

export const burgerConstructorReducer = (state = initialState, action:TIngredientsActions):IBurgerConstructor => { 
    switch (action.type) {
        case ADD_INGREDIENT: {
            if(action.ingredient.type==='bun') {
                return {...state, 
                    bun: action.ingredient
                }
            } else {
                return {...state, 
                    ingredients: [...state.ingredients, action.ingredient]
                }
            }
        }

        case DEL_INGREDIENT: {
            return {...state, 
                ingredients: state.ingredients.filter((item:TIngredient) => action.uid!==item.uid)
            }
        }

        case CLEAR_INGREDIENTS: {
            return {
                ...state,
                bun: null,
                ingredients: []
            }
        }

        case MOVE_INGREDIENTS: {
            const ingredients = [...state.ingredients];

            const fromIndex = ((action.fromIndex !== undefined) &&
                                (action.fromIndex >= 0) && 
                                (action.fromIndex < ingredients.length)) ?
                                action.fromIndex : 0;
            const toIndex = ((action.toIndex !== undefined) &&
                                  (action.toIndex >= 0) && 
                                  (action.toIndex < ingredients.length)) ?
                                 action.toIndex : 0;
            if(fromIndex !== toIndex){
                ingredients.splice(toIndex, 0, ingredients.splice(fromIndex, 1)[0]);
                return {...state,
                    ingredients: ingredients
                };
            } else return state;
        }  
    
        default: return state;
    }
}