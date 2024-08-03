import { TFeed, TIngredient } from "../../utils/types";
import {
    WS_FEED_CONNECTION_START,
    WS_FEED_CONNECTION_SUCCESS,
    WS_FEED_CONNECTION_ERROR,
    WS_FEED_CONNECTION_CLOSE,
    WS_FEED_GET_MESSAGE,
    WS_FEED_SEND_MESSAGE
  } from "../constants/ws-feed";

  export interface IActionTypes {
    feed: any;
    ingredients: TIngredient[];
    wsConnected: boolean;
    wsLoad: boolean;
    wsError: boolean;
    type: string
}
interface IWSFeed {
    data: any;
    ingredients: any;
    wsLoad: boolean,
    wsConnected: boolean,
    wsError: false
}

const initialState:IWSFeed = {
    data: [],
    ingredients: [],
    wsConnected: false,
    wsLoad: false,
    wsError: false
};

export const wsFeedReducer = (state = initialState, action:IActionTypes) => { 
    switch (action.type) {
        case WS_FEED_CONNECTION_START: return { 
            ...state, wsLoad: true, wsConnected: false, wsError: false
        }

        case WS_FEED_CONNECTION_SUCCESS: return { 
            ...state,  wsLoad: false, wsConnected: true, wsError: false
        }

        case WS_FEED_CONNECTION_ERROR: return { 
            ...state,  wsLoad: false, wsConnected: false, wsError: true
        }

        case WS_FEED_CONNECTION_CLOSE: return { 
            ...state, wsLoad: false, wsConnected: false, wsError: false, data: []
        }

        case WS_FEED_GET_MESSAGE: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false, data: action.feed
        }

        case WS_FEED_SEND_MESSAGE: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false
        }

        default: return state;
    }
}