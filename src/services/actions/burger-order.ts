import { BASE_URL } from "../../utils/config";
import { getCookie, fetchRequestRefresh } from "../../utils/utils";
import { TIngredient, TOrder } from "../../utils/types";

import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR
} from "../constants/burger-order";
import { AppDispatch, AppThunk } from "../types";

export interface IGetOrderRequestAction {
    readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly orderData: ReadonlyArray<TOrder>;
}

export interface IGetOrderErrorAction {
    readonly type: typeof GET_ORDER_ERROR;
}

const getIngredientsListRequest = ():IGetOrderRequestAction => ({
    type: GET_ORDER_REQUEST
});

const getIngredientsListSuccess = (orderData:ReadonlyArray<TOrder>):IGetOrderSuccessAction => ({
    type: GET_ORDER_SUCCESS,
    orderData
});

const getIngredientsListError = ():IGetOrderErrorAction => ({
    type: GET_ORDER_ERROR
});

export const getOrder:AppThunk = (orderCheck:TIngredient[]) => (dispatch:AppDispatch) => {
    const orderCheckData = {'ingredients': orderCheck};

    dispatch(getIngredientsListRequest());

    const accessToken = getCookie('accessToken');

    if(orderCheck) {
        fetchRequestRefresh(`${BASE_URL}/orders`, {
            method: 'POST',
            cache: 'no-cache',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: 'Bearer '+accessToken 
            },
            redirect: 'follow',
            body: JSON.stringify(orderCheckData)
        })
        .then(res => {
            if(res && res.success) dispatch(getIngredientsListSuccess(res));
            else dispatch(getIngredientsListError());
        })
        .catch(err => {
            dispatch(getIngredientsListError());
        });
    } else dispatch(getIngredientsListError());
}

export type TGetOrderActions =
  | IGetOrderRequestAction
  | IGetOrderSuccessAction
  | IGetOrderErrorAction;