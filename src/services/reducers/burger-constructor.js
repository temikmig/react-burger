import { INGREDIENT_ADD, INGREDIENT_DEL, INGREDIENTS_CLEAR, INGREDIENTS_MOVE } from '../actions/burger-constructor';
import uuid from 'react-uuid';

const initialState = {
    bun: null,
    ingredients: []
};

export const burgerConstructor = (state = initialState, action) => { 
    switch (action.type) {
        case INGREDIENT_ADD: {
            let obj = action.payload.ingredient;
            obj.uid = uuid();

            if(action.payload.ingredient.type==='bun') {
                return {...state, 
                    bun: action.payload.ingredient
                }
            } else {
                return {...state, 
                    ingredients: [...state.ingredients, obj]
                }
            }
        }

        case INGREDIENT_DEL: {
            return {...state, 
                ingredients: state.ingredients.filter((item) => action.payload.uid!==item.uid)
            }
        }

        case INGREDIENTS_CLEAR: {
            return {
                ...state,
                bun: null,
                ingredients: []
            }
        }

        case INGREDIENTS_MOVE: {
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
            }
        }  
    
        default: return state;
    }
}