import { TUserAuth, TUserData, TUserDataRedux, TUserForgotPassword, TUserPatch, TUserRegistration, TUserResetPassword } from '../../utils/types';
import { 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_REQUEST, 
    LOGIN_USER_ERROR,

    REGISTER_USER_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_ERROR,

    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_ERROR,

    GET_USERDATA_SUCCESS,
    GET_USERDATA_REQUEST,
    GET_USERDATA_ERROR,

    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_ERROR,

    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_ERROR,

    PATCH_USER_SUCCESS,
    PATCH_USER_REQUEST,
    PATCH_USER_ERROR
} from '../constants/user-data';

export interface IActionTypes {
    loginData: TUserAuth;
    registerData: TUserRegistration;
    userData: TUserData
    forgotPasswordData: TUserForgotPassword;
    resetPasswordData: TUserResetPassword;
    patchPasswordData: TUserPatch;
    type: string;
}

interface IUserData {
    data: TUserDataRedux | null,
    isLoad: boolean,
    isError: boolean,
    userLoggedIn: boolean,
    isForgotPassword: boolean, 
    isResetPassword: boolean
}

const initialState:IUserData = {
    data: null,
    isLoad: false,
    isError: false,
    userLoggedIn: false,
    isForgotPassword: false, 
    isResetPassword: false
};

export const userDataReducer = (state = initialState, action:IActionTypes) => { 
    switch (action.type) {
        //login------
        case LOGIN_USER_SUCCESS: return { 
            ...state, 
            data: action.loginData,
            isLoad: false,
            isError: false, 
            userLoggedIn: true
        }

        case LOGIN_USER_REQUEST: return { 
            ...state, 
            data: null,
            isLoad: true,
            isError: false, 
            userLoggedIn: false
        }

        case LOGIN_USER_ERROR: return { 
            ...state, 
            isLoad: false,
            isError: true
        }

        //register ------
        case REGISTER_USER_SUCCESS: return { 
            ...state, 
            data: action.registerData,
            isLoad: false,
            isError: false, 
            userLoggedIn: true
        }

        case REGISTER_USER_REQUEST: return { 
            ...state, 
            data: null,
            isLoad: true,
            isError: false
        }

        case REGISTER_USER_ERROR: return { 
            ...state, 
            data: null,
            isLoad: false,
            isError: true, 
            userLoggedIn: false
        }

        //logout ----------
        case LOGOUT_USER_SUCCESS: return { 
            ...state, 
            data: null,
            isLoad: false,
            isError: false, 
            userLoggedIn: false
        }

        case LOGOUT_USER_REQUEST: return { 
            ...state, 
            data: null,
            isLoad: true,
            isError: false
        }

        case LOGOUT_USER_ERROR: return { 
            ...state, 
            data: null,
            isLoad: false,
            isError: true, 
            userLoggedIn: false
        }

        //userdata------
        case GET_USERDATA_SUCCESS: return { 
            ...state, 
            data: action.userData,
            isLoad: false,
            isError: false, 
            userLoggedIn: true
        }

        case GET_USERDATA_REQUEST: return { 
            ...state, 
            data: null,
            isLoad: true,
            isError: false
        }

        case GET_USERDATA_ERROR: return { 
            ...state, 
            data: null,
            isLoad: false,
            isError: true, 
            userLoggedIn: false
        }
        
        //forgot-password ------
        case FORGOT_PASSWORD_SUCCESS: return { 
            ...state, 
            data: action.forgotPasswordData,
            isLoad: false,
            isError: false,
            isForgotPassword: true
        }
        
        case FORGOT_PASSWORD_REQUEST: return { 
            ...state, 
            data: null,
            isLoad: true,
            isError: false
        }
        
        case FORGOT_PASSWORD_ERROR: return { 
            ...state, 
            data: null,
            isLoad: false,
            isError: true
        }

        //reset-password ------
        case RESET_PASSWORD_SUCCESS: return { 
            ...state, 
            data: action.resetPasswordData,
            isLoad: false,
            isError: false,
            isForgotPassword: false,
            isResetPassword: false
        }
        
        case RESET_PASSWORD_REQUEST: return { 
            ...state, 
            data: null,
            isLoad: true,
            isError: false
        }
        
        case RESET_PASSWORD_ERROR: return { 
            ...state, 
            data: [],
            isLoad: false,
            isError: true
        }

        //patch user ------
        case PATCH_USER_SUCCESS: return { 
            ...state, 
            data: action.patchPasswordData,
            isLoad: false,
            isError: false
        }
        
        case PATCH_USER_REQUEST: return { 
            ...state, 
            data: null,
            isLoad: true,
            isError: false
        }
        
        case PATCH_USER_ERROR: return { 
            ...state, 
            data: null,
            isLoad: false,
            isError: true
        }

        default: return state
    }
}