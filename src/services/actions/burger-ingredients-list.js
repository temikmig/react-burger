export const INGREDIENTS_LIST_REQUEST = 'INGREDIENTS_LIST_REQUEST';
export const INGREDIENTS_LIST_SUCCESS = 'INGREDIENTS_LIST_SUCCESS';
export const INGREDIENTS_LIST_ERROR = 'INGREDIENTS_LIST_ERROR';

export function ingredientsListGet() {
    return function(dispatch) {
        dispatch({
            type: INGREDIENTS_LIST_REQUEST
        })

        const BURGERAPI = "https://norma.nomoreparties.space/api";
            
        const checkReponse = (res) => {
            return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
        };
        
        fetch(`${BURGERAPI}/ingredients`)
        .then(checkReponse)
        .then(res => {
            if (res && res.success) {
                dispatch({
                    type: INGREDIENTS_LIST_SUCCESS,
                    payload: res
                })
            } else {
                dispatch({
                    type: INGREDIENTS_LIST_ERROR
                })
            }
        })
        .catch( err => {
            dispatch({
                type: INGREDIENTS_LIST_ERROR
            })
        });
    }
}