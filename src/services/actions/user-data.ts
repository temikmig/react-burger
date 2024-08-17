import { BASE_URL } from "../../utils/config";
import { TUserAuth, TUserData, TUserForgotPassword, TUserPatch, TUserRegistration, TUserResetPassword } from "../../utils/types";
import { setCookie, deleteCookie, getCookie, fetchRequest, fetchRequestRefresh } from "../../utils/utils";

import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,

    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,

    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR,

    GET_USERDATA_REQUEST,
    GET_USERDATA_SUCCESS,
    GET_USERDATA_ERROR,

    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,

    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,

    PATCH_USER_REQUEST,
    PATCH_USER_SUCCESS,
    PATCH_USER_ERROR
} from "../constants/user-data";
import { AppDispatch, AppThunk } from "../types";

// login -----------
export interface ILoginUserRequestAction {
    readonly type: typeof LOGIN_USER_REQUEST;
}

export interface ILoginUserSuccessAction {
    readonly type: typeof LOGIN_USER_SUCCESS;
    readonly loginData: ReadonlyArray<TUserAuth>;
}

export interface ILoginUserErrorAction {
    readonly type: typeof LOGIN_USER_ERROR;
}

const loginUserRequest = ():ILoginUserRequestAction => ({
    type: LOGIN_USER_REQUEST
});

const loginUserSuccess = (loginData:ReadonlyArray<TUserAuth>):ILoginUserSuccessAction => ({
    type: LOGIN_USER_SUCCESS,
    loginData
});

const loginUserError = ():ILoginUserErrorAction => ({
    type: LOGIN_USER_ERROR
});

export const loginUser:AppThunk = (data:TUserAuth) => (dispatch:AppDispatch) => {
    const loginData = {
        email: data.email,
        password: data.password
    };
    
    dispatch(loginUserRequest());

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

                dispatch(loginUserSuccess(res));
            } else dispatch(loginUserError());
        })
        .catch(err => {
            dispatch(loginUserError())
        });
    } else dispatch(loginUserError());
}

// register -----------
export interface IRegisterUserRequestAction {
    readonly type: typeof REGISTER_USER_REQUEST;
}

export interface IRegisterUserSuccessAction {
    readonly type: typeof REGISTER_USER_SUCCESS;
    readonly registerData: ReadonlyArray<TUserRegistration>;
}

export interface IRegisterUserErrorAction {
    readonly type: typeof REGISTER_USER_ERROR;
}

const registerUserRequest = ():IRegisterUserRequestAction => ({
    type: REGISTER_USER_REQUEST
});

const registerUserSuccess = (registerData:ReadonlyArray<TUserRegistration>):IRegisterUserSuccessAction => ({
    type: REGISTER_USER_SUCCESS,
    registerData
});

const registerUserError = ():IRegisterUserErrorAction => ({
    type: REGISTER_USER_ERROR
});

export const registerUser:AppThunk = (data:TUserRegistration) => (dispatch:AppDispatch) => {
    const registerData = {
        email: data.email,
        password: data.password,
        name: data.name,
    };
    
    dispatch(registerUserRequest());

    if(data) {
        fetchRequest(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
        })
        .then(res => {
            if (res && res.success) {
                const accessToken = res.accessToken.split('Bearer ')[1];
                const refreshToken = res.refreshToken;

                if (accessToken) {
                    setCookie('accessToken', accessToken, { expires: 20 * 60 });
                    localStorage.setItem('refreshToken', refreshToken);
                }

                dispatch(registerUserSuccess(res));
            } else dispatch(registerUserError());
        })
        .catch(err => {
            dispatch(registerUserError());
        });
    } else dispatch(registerUserError());
}

// logout -----------
export interface ILogoutUserRequestAction {
    readonly type: typeof LOGOUT_USER_REQUEST;
}

export interface ILogoutUserSuccessAction {
    readonly type: typeof LOGOUT_USER_SUCCESS;
}

export interface ILogoutUserErrorAction {
    readonly type: typeof LOGOUT_USER_ERROR;
}

const logoutUserRequest = ():ILogoutUserRequestAction => ({
    type: LOGOUT_USER_REQUEST
});

const logoutUserSuccess = ():ILogoutUserSuccessAction => ({
    type: LOGOUT_USER_SUCCESS
});

const logoutUserError = ():ILogoutUserErrorAction => ({
    type: LOGOUT_USER_ERROR
});

export const logoutUser:AppThunk = () => (dispatch:AppDispatch) => {
    const refreshToken = localStorage.getItem('refreshToken');

    dispatch(logoutUserRequest());

    localStorage.removeItem('refreshToken');
    deleteCookie('accessToken');

    fetchRequest(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({token: refreshToken})
    })
    .then(res => {
        if(res && res.success) dispatch(logoutUserSuccess());
        else dispatch(logoutUserError());
    })
    .catch( err => {
        dispatch(logoutUserError());
    });
}

// userdata -------------
export interface IGetUserDataRequestAction {
    readonly type: typeof GET_USERDATA_REQUEST;
}

export interface IGetUserDataSuccessAction {
    readonly type: typeof GET_USERDATA_SUCCESS;
    readonly userData: ReadonlyArray<TUserData>;
}

export interface IGetUserDataErrorAction {
    readonly type: typeof GET_USERDATA_ERROR;
}

const getUserDataRequest = ():IGetUserDataRequestAction => ({
    type: GET_USERDATA_REQUEST
});

const getUserDataSuccess = (userData:ReadonlyArray<TUserData>):IGetUserDataSuccessAction => ({
    type: GET_USERDATA_SUCCESS,
    userData
});

const getUserDataError = ():IGetUserDataErrorAction => ({
    type: GET_USERDATA_ERROR
});

export const getUserData:AppThunk = () => (dispatch:AppDispatch) => {
    dispatch(getUserDataRequest());

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
            if(res && res.success) dispatch(getUserDataSuccess(res));
            else dispatch(getUserDataError());
        })
        .catch( err => {
            dispatch(getUserDataError());
        });
    } else dispatch(getUserDataError());
}

// forgot password -----------
export interface IForgotPasswordRequestAction {
    readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccessAction {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS;
    readonly forgotPasswordData: ReadonlyArray<TUserForgotPassword>;
}

export interface IForgotPasswordErrorAction {
    readonly type: typeof FORGOT_PASSWORD_ERROR;
}

const forgotPasswordRequest = ():IForgotPasswordRequestAction => ({
    type: FORGOT_PASSWORD_REQUEST
});

const forgotPasswordSuccess = (forgotPasswordData:ReadonlyArray<TUserForgotPassword>):IForgotPasswordSuccessAction => ({
    type: FORGOT_PASSWORD_SUCCESS,
    forgotPasswordData
});

const forgotPasswordError = ():IForgotPasswordErrorAction => ({
    type: FORGOT_PASSWORD_ERROR
});

export const forgotPassword:AppThunk = (data:TUserForgotPassword) => (dispatch:AppDispatch) => {
    dispatch(forgotPasswordRequest());

    fetchRequest(`${BASE_URL}/password-reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: data.email})
    })
    .then(res => {
        if(res && res.success) dispatch(forgotPasswordSuccess(res));
        else dispatch(forgotPasswordError());
    })
    .catch( err => {
        dispatch(forgotPasswordError());
    });
}

// reset password -----------
export interface IResetPasswordRequestAction {
    readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
    readonly resetPasswordData: ReadonlyArray<TUserResetPassword>;
}

export interface IResetPasswordErrorAction {
    readonly type: typeof RESET_PASSWORD_ERROR;
}

const resetPasswordRequest = ():IResetPasswordRequestAction => ({
    type: RESET_PASSWORD_REQUEST
});

const resetPasswordSuccess = (resetPasswordData:ReadonlyArray<TUserResetPassword>):IResetPasswordSuccessAction => ({
    type: RESET_PASSWORD_SUCCESS,
    resetPasswordData
});

const resetPasswordError = ():IResetPasswordErrorAction => ({
    type: RESET_PASSWORD_ERROR
});

export const resetPassword:AppThunk = (data:TUserResetPassword) => (dispatch:AppDispatch) => {
    const resetPasswordData = {
        password: data.password,
        token: data.token
    }

    dispatch(resetPasswordRequest());

    fetchRequest(`${BASE_URL}/password-reset/reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resetPasswordData)
    })
    .then(res => {
        if(res && res.success) dispatch(resetPasswordSuccess(res));
        else dispatch(resetPasswordError());
    })
    .catch(err => {
        dispatch(resetPasswordError());
    });
}

// patch user -----------
export interface IPatchUserRequestAction {
    readonly type: typeof PATCH_USER_REQUEST;
}

export interface IPatchUserSuccessAction {
    readonly type: typeof PATCH_USER_SUCCESS;
    readonly patchPasswordData: ReadonlyArray<TUserPatch>;
}

export interface IPatchUserErrorAction {
    readonly type: typeof PATCH_USER_ERROR;
}

const patchPasswordRequest = ():IPatchUserRequestAction => ({
    type: PATCH_USER_REQUEST
});

const patchPasswordSuccess = (patchPasswordData:ReadonlyArray<TUserPatch>):IPatchUserSuccessAction => ({
    type: PATCH_USER_SUCCESS,
    patchPasswordData
});

const patchPasswordError = ():IPatchUserErrorAction => ({
    type: PATCH_USER_ERROR
});

export const patchUser:AppThunk = (data:TUserPatch) => (dispatch:AppDispatch) => {
    dispatch(patchPasswordRequest());

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
        if(res && res.success) dispatch(patchPasswordSuccess(res));
        else dispatch(patchPasswordError());
    })
    .catch(err => {
        dispatch(patchPasswordError());
    });
}

export type TUserDataActions =
  | ILoginUserRequestAction
  | ILoginUserSuccessAction
  | ILoginUserErrorAction

  | IRegisterUserRequestAction
  | IRegisterUserSuccessAction
  | IRegisterUserErrorAction

  | ILogoutUserRequestAction
  | ILogoutUserSuccessAction
  | ILogoutUserErrorAction

  | IGetUserDataRequestAction
  | IGetUserDataSuccessAction
  | IGetUserDataErrorAction

  | IForgotPasswordRequestAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordErrorAction
  
  | IResetPasswordRequestAction
  | IResetPasswordSuccessAction
  | IResetPasswordErrorAction

  | IPatchUserRequestAction
  | IPatchUserSuccessAction
  | IPatchUserErrorAction;