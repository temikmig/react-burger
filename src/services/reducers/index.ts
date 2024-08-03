import { combineReducers } from 'redux';

import { burgerConstructorReducer } from './burger-constructor';
import { burgerOrderReducer } from './burger-order';
import { ingredientDetailsReducer } from './burger-ingredient-details';
import { ingredientsListReducer } from './burger-ingredients-list';
import { userDataReducer } from './user-data';
import { OrderDetailsReducer } from './order-details';
import { wsFeedReducer } from './ws-feed';
import { wsProfileFeedReducer } from './ws-profile-feed';

export const rootReducer = combineReducers({
    burgerConstructor: burgerConstructorReducer,
    burgerOrder: burgerOrderReducer,
    ingredientDetails: ingredientDetailsReducer,
    ingredientsList: ingredientsListReducer,
    userData: userDataReducer,
    orderDetails: OrderDetailsReducer,
    wsFeed: wsFeedReducer,
    wsProfileFeed: wsProfileFeedReducer
});