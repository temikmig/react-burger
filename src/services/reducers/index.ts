import { combineReducers } from 'redux';

import { burgerConstructorReducer } from './burger-constructor';
import { burgerOrderReducer } from './burger-order';
import { ingredientDetailsReducer } from './burger-ingredient-details';
import { ingredientsListReducer } from './burger-ingredients-list';
import { userDataReducer } from './user-data';
import { orderDetailsReducer } from './order-details';
import { wsReducer } from './ws';

export const rootReducer = combineReducers({
    burgerConstructor: burgerConstructorReducer,
    burgerOrder: burgerOrderReducer,
    ingredientDetails: ingredientDetailsReducer,
    ingredientsList: ingredientsListReducer,
    userData: userDataReducer,
    orderDetails: orderDetailsReducer,
    ws: wsReducer
});