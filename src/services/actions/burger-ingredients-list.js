import { BASE_URL, checkReponse } from "../../utils/config";

export const GET_INGREDIENTS_LIST_REQUEST = 'GET_INGREDIENTS_LIST_REQUEST';
export const GET_INGREDIENTS_LIST_SUCCESS = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_ERROR = 'GET_INGREDIENTS_LIST_ERROR';

export function getIngredientsList() {
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS_LIST_REQUEST
        })
            
        fetch(`${BASE_URL}/ingredients`)
        .then(checkReponse)
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