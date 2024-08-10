import { userDataReducer, initialState as userDataInitialState } from './user-data';
import * as types from '../constants/user-data'
import { testLoginData, testRegisterData, testUserData, testForgotPasswordData, testResetPasswordData, testPatchPasswordData } from '../../utils/test-data';

describe('user-data reducer', () => {
    // login

    it('should handle LOGIN_USER_SUCCESS', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.LOGIN_USER_SUCCESS, loginData: testLoginData })).toEqual({
            ...initialState,
            data: testLoginData,
            isLoad: false,
            isError: false, 
            userLoggedIn: true
        });
    });

    it('should handle LOGIN_USER_REQUEST', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.LOGIN_USER_REQUEST })).toEqual({
            ...initialState,
            data: null,
            isLoad: true,
            isError: false, 
            userLoggedIn: false
        });
    });

    it('should handle LOGIN_USER_ERROR', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.LOGIN_USER_ERROR })).toEqual({
            ...initialState,
            isLoad: false,
            isError: true
        });
    });

    //register

    it('should handle REGISTER_USER_SUCCESS', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.REGISTER_USER_SUCCESS, registerData: testRegisterData })).toEqual({
            ...initialState,
            data: testRegisterData,
            isLoad: false,
            isError: false, 
            userLoggedIn: true
        });
    });

    it('should handle REGISTER_USER_REQUEST', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.REGISTER_USER_REQUEST })).toEqual({
            ...initialState,
            data: null,
            isLoad: true,
            isError: false
        });
    });

    it('should handle REGISTER_USER_ERROR', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.REGISTER_USER_ERROR })).toEqual({
            ...initialState,
            isLoad: false,
            isError: true,
            userLoggedIn: false
        });
    });

    // logout

    it('should handle LOGOUT_USER_SUCCESS', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.LOGOUT_USER_SUCCESS })).toEqual({
            ...initialState,
            data: null,
            isLoad: false,
            isError: false, 
            userLoggedIn: false
        });
    });

    it('should handle LOGOUT_USER_REQUEST', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.LOGOUT_USER_REQUEST })).toEqual({
            ...initialState,
            data: null,
            isLoad: true,
            isError: false
        });
    });

    it('should handle LOGOUT_USER_ERROR', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.LOGOUT_USER_ERROR })).toEqual({
            ...initialState,
            data: null,
            isLoad: false,
            isError: true, 
            userLoggedIn: false
        });
    });

    //userdata

    it('should handle GET_USERDATA_SUCCESS', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.GET_USERDATA_SUCCESS, userData: testUserData })).toEqual({
            ...initialState,
            data: testUserData,
            isLoad: false,
            isError: false, 
            userLoggedIn: true
        });
    });

    it('should handle GET_USERDATA_REQUEST', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.GET_USERDATA_REQUEST })).toEqual({
            ...initialState,
            data: null,
            isLoad: true,
            isError: false
        });
    });

    it('should handle GET_USERDATA_ERROR', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.GET_USERDATA_ERROR })).toEqual({
            ...initialState,
            data: null,
            isLoad: false,
            isError: true, 
            userLoggedIn: false
        });
    });

    //forgot-password

    it('should handle FORGOT_PASSWORD_SUCCESS', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.FORGOT_PASSWORD_SUCCESS, forgotPasswordData: testForgotPasswordData })).toEqual({
            ...initialState,
            data: testForgotPasswordData,
            isLoad: false,
            isError: false,
            isForgotPassword: true
        });
    });

    it('should handle FORGOT_PASSWORD_REQUEST', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.FORGOT_PASSWORD_REQUEST })).toEqual({
            ...initialState,
            data: null,
            isLoad: true,
            isError: false
        });
    });

    it('should handle FORGOT_PASSWORD_ERROR', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.FORGOT_PASSWORD_ERROR })).toEqual({
            ...initialState,
            data: null,
            isLoad: false,
            isError: true
        });
    });

    //reset-password

    it('should handle RESET_PASSWORD_SUCCESS', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.RESET_PASSWORD_SUCCESS, resetPasswordData: testResetPasswordData })).toEqual({
            ...initialState,
            data: testResetPasswordData,
            isLoad: false,
            isError: false,
            isForgotPassword: false,
            isResetPassword: false
        });
    });

    it('should handle RESET_PASSWORD_REQUEST', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.RESET_PASSWORD_REQUEST })).toEqual({
            ...initialState,
            data: null,
            isLoad: true,
            isError: false
        });
    });

    it('should handle RESET_PASSWORD_ERROR', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.RESET_PASSWORD_ERROR })).toEqual({
            ...initialState,
            data: [],
            isLoad: false,
            isError: true
        });
    });

    //patch-user

    it('should handle PATCH_USER_SUCCESS', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.PATCH_USER_SUCCESS, patchPasswordData: testPatchPasswordData })).toEqual({
            ...initialState,
            data: testPatchPasswordData,
            isLoad: false,
            isError: false
        });
    });

    it('should handle PATCH_USER_REQUEST', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.PATCH_USER_REQUEST })).toEqual({
            ...initialState,
            data: null,
            isLoad: true,
            isError: false
        });
    });

    it('should handle PATCH_USER_ERROR', () => {    
        const initialState = {...userDataInitialState};

        expect(userDataReducer(initialState, { type: types.PATCH_USER_ERROR })).toEqual({
            ...initialState,
            data: null,
            isLoad: false,
            isError: true
        });
    });
});