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
    feed: TFeed;
    wsConnected: boolean;
    wsLoad: boolean;
    wsError: boolean;
    type: string
}
interface IWSFeed {
    data: TFeed | null;
    wsLoad: boolean,
    wsConnected: boolean,
    wsError: boolean,
    wsData: boolean
}

const initialState:IWSFeed = {
    data: null,
    wsConnected: false,
    wsLoad: false,
    wsError: false,
    wsData: false
};

export const wsFeedReducer = (state = initialState, action:IActionTypes) => { 
    switch (action.type) {
        case WS_FEED_CONNECTION_START: return { 
            ...state, wsLoad: true, wsConnected: false, wsError: false, wsData: false, data: null
        }

        case WS_FEED_CONNECTION_SUCCESS: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false, wsData: false, data: null
        }

        case WS_FEED_CONNECTION_ERROR: return { 
            ...state, wsLoad: false, wsConnected: false, wsError: true, wsData: false, data: null
        }

        case WS_FEED_CONNECTION_CLOSE: return { 
            ...state, wsLoad: false, wsConnected: false, wsError: false, wsData: true, 
        }

        case WS_FEED_GET_MESSAGE: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false, wsData: true,  data: action.feed
        }

        case WS_FEED_SEND_MESSAGE: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false
        }

        default: return state;
    }
}