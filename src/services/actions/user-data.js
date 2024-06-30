import { BASE_URL } from "../../utils/config";
import { setCookie, deleteCookie, getCookie, fetchRequest, fetchRequestRefresh } from "../../utils/utils";

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR';

export const GET_USERDATA_REQUEST = 'GET_USERDATA_REQUEST';
export const GET_USERDATA_SUCCESS = 'GET_USERDATA_SUCCESS';
export const GET_USERDATA_ERROR = 'GET_USERDATA_ERROR';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export const PATCH_USER_REQUEST = 'PATCH_USER_REQUEST';
export const PATCH_USER_SUCCESS = 'PATCH_USER_SUCCESS';
export const PATCH_USER_ERROR = 'PATCH_USER_ERROR';

// login -----------
export function loginUser(data) {
    const loginData = {
        email: data.email,
        password: data.password
    };
    
    return function(dispatch) {
        dispatch({
            type: LOGIN_USER_REQUEST
        })

        if(data) {
            fetchRequest(`${BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            })
            .then(res => {
                if (res && res.success) {
                    const accessToken = res.accessToken.split('Bearer ')[1];
                    const refreshToken = res.refreshToken;

                    if(accessToken) {
                        setCookie('accessToken', accessToken);
                        localStorage.setItem('refreshToken', refreshToken);
                    }

                    dispatch({
                         type: LOGIN_USER_SUCCESS,
                         payload: res
                    });
                } else {
                    dispatch({
                        type: LOGIN_USER_ERROR
                    })
                }
            })
            .catch( err => {
                dispatch({
                    type: LOGIN_USER_ERROR
                })
            });
        } else dispatch({
            type: LOGIN_USER_ERROR
        });
    }
}

// register -----------
export function registerUser(data) {
    const registerData = {
        email: data.email,
        password: data.password,
        name: data.name,
    };
    
    return function(dispatch) {
        dispatch({
            type: REGISTER_USER_REQUEST
        })

        if(data) {
            fetchRequest(`${BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registerData)
            })
            .then(res => {
                if(res && res.success) {
                    const accessToken = res.accessToken.split('Bearer ')[1];
                    const refreshToken = res.refreshToken;

                    if(accessToken) {
                        setCookie('accessToken', accessToken, { expires: 20*60 });
                        localStorage.setItem('refreshToken', refreshToken);
                    }

                    dispatch({
                        type: REGISTER_USER_SUCCESS,
                        payload: res
                    });
                } else {
                    dispatch({
                        type: REGISTER_USER_ERROR
                    })
                }
            })
            .catch( err => {
                dispatch({
                    type: REGISTER_USER_ERROR
                })
            });
        } else dispatch({
            type: REGISTER_USER_ERROR
        });
    }
}

// logout -----------
export function logoutUser() {
    const refreshToken = localStorage.getItem('refreshToken');

    return function(dispatch) {
        dispatch({
            type: LOGOUT_USER_REQUEST
        })

        localStorage.removeItem('refreshToken');
        deleteCookie('accessToken');

        fetchRequest(`${BASE_URL}/auth/logout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({token: refreshToken})
        })
        .then(res => {
            if (res && res.success) {            
                dispatch({
                    type: LOGOUT_USER_SUCCESS
                });
            } else {
                dispatch({
                    type: LOGOUT_USER_ERROR
                })
            }
        })
        .catch( err => {
            dispatch({
                type: LOGOUT_USER_ERROR
            })
        });
    }
}

// userdata -------------
export function getUserData() {    
    return function(dispatch) {
        dispatch({
            type: GET_USERDATA_REQUEST
        })

        const accessToken = getCookie('accessToken');

        if(accessToken) {
            fetchRequestRefresh(`${BASE_URL}/auth/user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer '+accessToken
                }
            })
            .then(res => {
                if (res && res.success) {
                    dispatch({
                         type: GET_USERDATA_SUCCESS,
                         payload: res
                    });
                } else {
                    dispatch({
                        type: GET_USERDATA_ERROR
                    })
                }
            })
            .catch( err => {
                dispatch({
                    type: GET_USERDATA_ERROR
                });
            });
        } else dispatch({
            type: GET_USERDATA_ERROR
        });
    }
}

// forgot password -----------
export function forgotPassword(data) {
    return function(dispatch) {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST
        })

        fetchRequest(`${BASE_URL}/password-reset`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: data.email})
        })
        .then(res => {
            if (res && res.success) {            
                dispatch({
                    type: FORGOT_PASSWORD_SUCCESS,
                    payload: res
                });
            } else {
                dispatch({
                    type: FORGOT_PASSWORD_ERROR
                })
            }
        })
        .catch( err => {
            dispatch({
                type: FORGOT_PASSWORD_ERROR
            })
        });
    }
}

// reset password -----------
export function resetPassword(data) {
    const resetPasswordData = {
        password: data.password,
        token: data.token
    }

    return function(dispatch) {
        dispatch({
            type: RESET_PASSWORD_REQUEST
        })

        fetchRequest(`${BASE_URL}/password-reset/reset`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(resetPasswordData)
        })
        .then(res => {
            if (res && res.success) {            
                dispatch({
                    type: RESET_PASSWORD_SUCCESS,
                    payload: res
                });
            } else {
                dispatch({
                    type: RESET_PASSWORD_ERROR
                })
            }
        })
        .catch( err => {
            dispatch({
                type: RESET_PASSWORD_ERROR
            })
        });
    }
}

// patch user -----------
export function patchUser(data) {
    return function(dispatch) {
        dispatch({
            type: PATCH_USER_REQUEST
        })

        const accessToken = getCookie('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        fetchRequestRefresh(`${BASE_URL}/auth/user`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: 'Bearer '+accessToken
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res && res.success) {            
                dispatch({
                    type: PATCH_USER_SUCCESS,
                    payload: res
                });
            } else {
                dispatch({
                    type: PATCH_USER_ERROR
                })
            }
        })
        .catch( err => {
            dispatch({
                type: PATCH_USER_ERROR
            });
        });
    }
}