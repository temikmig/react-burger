import { TFeed, TIngredient } from "../../utils/types";
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSE,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE
  } from "../constants/ws";

  export interface IActionTypes {
    payload: TFeed;
    wsConnected: boolean;
    wsLoad: boolean;
    wsError: boolean;
    type: string
}
interface IWSFeed {
    data: TFeed | null;
    wsLoad: boolean,
    wsConnected: boolean,
    wsError: boolean
}

const initialState:IWSFeed = {
    data: null,
    wsConnected: false,
    wsLoad: false,
    wsError: false
};

export const wsReducer = (state = initialState, action:IActionTypes) => { 
    switch (action.type) {
        case WS_CONNECTION_START: return { 
            ...state, wsLoad: true, wsConnected: false, wsError: false, data: null
        }

        case WS_CONNECTION_SUCCESS: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false, data: null
        }

        case WS_CONNECTION_ERROR: return { 
            ...state, wsLoad: false, wsConnected: false, wsError: true, data: null
        }

        case WS_CONNECTION_CLOSE: return { 
            ...state, wsLoad: false, wsConnected: false, wsError: false, data: null
        }

        case WS_GET_MESSAGE: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false, data: action.payload
        }

        case WS_SEND_MESSAGE: return { 
            ...state, wsLoad: false, wsConnected: false, wsError: false
        }

        default: return state;
    }
}