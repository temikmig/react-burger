import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';

import { store } from '../store';
import { TIngredientsActions } from '../actions/burger-constructor';
import { TIngredientDetailsActions } from '../actions/burger-ingredient-details';
import { TGetIngredientsListActions } from '../actions/burger-ingredients-list';
import { TGetOrderActions } from '../actions/burger-order';
import { TUserDataActions } from '../actions/user-data';

import { TGetOrderDetailsActions } from '../actions/order-details';
import { TWebSocketActions } from '../actions/ws';

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TIngredientsActions | TIngredientDetailsActions | TGetIngredientsListActions | TGetOrderActions | TUserDataActions | TGetOrderDetailsActions | TWebSocketActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>; 

export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;

// export type TAppStore = typeof store;