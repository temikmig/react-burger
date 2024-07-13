import { 
    ADD_INGREDIENT, 
    DEL_INGREDIENT, 
    CLEAR_INGREDIENTS, 
    MOVE_INGREDIENTS 
} from '../actions/burger-constructor';

import { IActionTypes } from '../../utils/interfaces';
import { TIngredient } from '../../utils/types';

interface IBurgerConstructor {
    bun: any;
    ingredients: any;
}

const initialState:IBurgerConstructor = {
    bun: null,
    ingredients: []
};

export const burgerConstructor = (state = initialState, action:IActionTypes) => { 
    switch (action.type) {
        case ADD_INGREDIENT: {
            if(action.payload.ingredient.type==='bun') {
                return {...state, 
                    bun: action.payload.ingredient
                }
            } else {
                return {...state, 
                    ingredients: [...state.ingredients, action.payload.ingredient]
                }
            }
        }

        case DEL_INGREDIENT: {
            return {...state, 
                ingredients: state.ingredients.filter((item:TIngredient) => action.payload.uid!==item.uid)
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

            const fromIndex = ((action.payload.fromIndex !== undefined) &&
                                (action.payload.fromIndex >= 0) && 
                                (action.payload.fromIndex < ingredients.length)) ?
                                action.payload.fromIndex : 0;
            const toIndex = ((action.payload.toIndex !== undefined) &&
                                  (action.payload.toIndex >= 0) && 
                                  (action.payload.toIndex < ingredients.length)) ?
                                 action.payload.toIndex : 0;
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