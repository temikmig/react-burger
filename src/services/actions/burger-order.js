export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_ERROR = 'ORDER_ERROR';

export function orderGet(orderCheck) {
    const orderCheckData = {'ingredients': orderCheck};

    return function(dispatch) {
        dispatch({
            type: ORDER_REQUEST
        })

        if(orderCheck) {
            const BURGERAPI = "https://norma.nomoreparties.space/api";
            
            const checkReponse = (res) => {
                return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
            };
        
            fetch(`${BURGERAPI}/orders`, {
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
                        type: ORDER_SUCCESS,
                        payload: res
                    })
                } else {
                    dispatch({
                        type: ORDER_ERROR
                    })
                }
            })
            .catch( err => {
                dispatch({
                    type: ORDER_ERROR
                })
            });
        } else dispatch({
            type: ORDER_ERROR
        });
    }
}