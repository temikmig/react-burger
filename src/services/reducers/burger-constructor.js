import { ADD_INGREDIENT, DEL_INGREDIENT, CLEAR_INGREDIENTS, MOVE_INGREDIENTS } from '../actions/burger-constructor';

const initialState = {
    bun: null,
    ingredients: []
};

export const burgerConstructor = (state = initialState, action) => { 
    switch (action.type) {
        case ADD_INGREDIENT: {
            console.log(action.payload.ingredient);
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
                ingredients: state.ingredients.filter((item) => action.payload.uid!==item.uid)
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
            }
        }  
    
        default: return state;
    }
}