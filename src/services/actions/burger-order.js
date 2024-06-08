import { BASE_URL, checkReponse } from "../../utils/config";

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

export function getOrder(orderCheck) {
    
    const orderCheckData = {'ingredients': orderCheck};

    return function(dispatch) {
        dispatch({
            type: GET_ORDER_REQUEST
        })

        if(orderCheck) {
            fetch(`${BASE_URL}/orders`, {
                method: 'POST',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow',
                body: JSON.stringify(orderCheckData)
            })
            .then(checkReponse)
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