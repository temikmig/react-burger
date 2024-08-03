import { BASE_URL } from "../../utils/config";
import { fetchRequest } from "../../utils/utils";
import { AppDispatch, AppThunk } from "../types";

import {
    GET_ORDER_DETAILS_REQUEST,
    GET_ORDER_DETAILS_SUCCESS,
    GET_ORDER_DETAILS_ERROR
} from "../constants/order-details";

import { TFeedItem, TOrderDetails } from "../../utils/types";

export interface IGetOrderDetailsRequestAction {
    readonly type: typeof GET_ORDER_DETAILS_REQUEST;
}

export interface IGetOrderDetailsSuccessAction {
    readonly type: typeof GET_ORDER_DETAILS_SUCCESS;
    readonly orderData: ReadonlyArray<TOrderDetails>;
}

export interface IGetOrderDetailsErrorAction {
    readonly type: typeof GET_ORDER_DETAILS_ERROR;
}

const getOrderDetailsRequest = ():IGetOrderDetailsRequestAction => ({
    type: GET_ORDER_DETAILS_REQUEST
});

const getOrderDetailsSuccess = (orderData:ReadonlyArray<TOrderDetails>):IGetOrderDetailsSuccessAction => ({
    type: GET_ORDER_DETAILS_SUCCESS,
    orderData
});

const getOrderDetailsError = ():IGetOrderDetailsErrorAction => ({
    type: GET_ORDER_DETAILS_ERROR
});

export const getOrderDetails:AppThunk = (orderNumber:number) => (dispatch:AppDispatch) => {
    dispatch(getOrderDetailsRequest());

    fetchRequest(`${BASE_URL}/orders/${orderNumber}`)
    .then(res => {
        if (res && res.success) dispatch(getOrderDetailsSuccess(res));
        else dispatch(getOrderDetailsError());
    })
    .catch(err => {
        dispatch(getOrderDetailsError());
    });
}

export type TGetOrderDetailsActions =
  | IGetOrderDetailsRequestAction
  | IGetOrderDetailsSuccessAction
  | IGetOrderDetailsErrorAction;