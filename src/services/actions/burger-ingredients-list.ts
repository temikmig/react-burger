import { BASE_URL } from "../../utils/config";
import { AppDispatch } from "../../utils/types";
import { fetchRequest } from "../../utils/utils";

export const GET_INGREDIENTS_LIST_REQUEST = 'GET_INGREDIENTS_LIST_REQUEST';
export const GET_INGREDIENTS_LIST_SUCCESS = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_ERROR = 'GET_INGREDIENTS_LIST_ERROR';

export function getIngredientsList():any {
    return function(dispatch:AppDispatch) {
        dispatch({
            type: GET_INGREDIENTS_LIST_REQUEST
        })
            
        fetchRequest(`${BASE_URL}/ingredients`)
        .then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_INGREDIENTS_LIST_SUCCESS,
                    payload: res
                })
            } else {
                dispatch({
                    type: GET_INGREDIENTS_LIST_ERROR
                })
            }
        })
        .catch( err => {
            dispatch({
                type: GET_INGREDIENTS_LIST_ERROR
            })
        });
    }
}