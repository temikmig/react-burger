import { BASE_URL } from "../../utils/config";
import { getCookie, fetchRequestRefresh } from "../../utils/utils";
import { AppDispatch, TIngredient } from "../../utils/types";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

export function getOrder(orderCheck?:any):any {
    const orderCheckData = {'ingredients': orderCheck};

    return function(dispatch:AppDispatch) {
        dispatch({
            type: GET_ORDER_REQUEST
        })

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
                if (res && res.success) {
                    dispatch({
                        type: GET_ORDER_SUCCESS,
                        payload: res
                    })
                } else {
                    dispatch({
                        type: GET_ORDER_ERROR
                    })
                }
            })
            .catch( err => {
                dispatch({
                    type: GET_ORDER_ERROR
                })
            });
        } else dispatch({
            type: GET_ORDER_ERROR
        });
    }
}