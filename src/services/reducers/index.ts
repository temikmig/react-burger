import { combineReducers } from 'redux';

import { burgerConstructor } from './burger-constructor';
import { burgerOrder } from './burger-order';
import { ingredientDetails } from './burger-ingredient-details';
import { ingredientsList } from './burger-ingredients-list';
import { userData } from './user-data';

export const rootReducer = combineReducers({
    burgerConstructor,
    burgerOrder,
    ingredientDetails,
    ingredientsList,
    userData
});