import { BASE_URL } from "../../utils/config";
import { fetchRequest } from "../../utils/utils";
import { AppDispatch, AppThunk } from "../types";

import {
    GET_INGREDIENTS_LIST_REQUEST,
    GET_INGREDIENTS_LIST_SUCCESS,
    GET_INGREDIENTS_LIST_ERROR
} from "../constants/burger-ingredients-list";

import { TIngredient } from "../../utils/types";

export interface IGetIngredientsListRequestAction {
    readonly type: typeof GET_INGREDIENTS_LIST_REQUEST;
}

export interface IGetIngredientsListSuccessAction {
    readonly type: typeof GET_INGREDIENTS_LIST_SUCCESS;
    readonly ingredients: ReadonlyArray<TIngredient>;
}

export interface IGetIngredientsListErrorAction {
    readonly type: typeof GET_INGREDIENTS_LIST_ERROR;
}

const getIngredientsListRequest = ():IGetIngredientsListRequestAction => ({
    type: GET_INGREDIENTS_LIST_REQUEST
});

const getIngredientsListSuccess = (ingredients:ReadonlyArray<TIngredient>):IGetIngredientsListSuccessAction => ({
    type: GET_INGREDIENTS_LIST_SUCCESS,
    ingredients
});

const getIngredientsListError = ():IGetIngredientsListErrorAction => ({
    type: GET_INGREDIENTS_LIST_ERROR
});

export const getIngredientsList:AppThunk = () => (dispatch:AppDispatch) => {
    dispatch(getIngredientsListRequest());

    fetchRequest(`${BASE_URL}/ingredients`)
    .then(res => {
        if (res && res.success) dispatch(getIngredientsListSuccess(res));
        else dispatch(getIngredientsListError());
    })
    .catch(err => {
        dispatch(getIngredientsListError());
    });
}

export type TGetIngredientsListActions =
  | IGetIngredientsListRequestAction
  | IGetIngredientsListSuccessAction
  | IGetIngredientsListErrorAction;