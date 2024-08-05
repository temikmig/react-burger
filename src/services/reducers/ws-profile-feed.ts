import { TFeed, TIngredient } from "../../utils/types";
import { 
    WS_PROFILE_FEED_CONNECTION_START,
    WS_PROFILE_FEED_CONNECTION_SUCCESS,
    WS_PROFILE_FEED_CONNECTION_ERROR,
    WS_PROFILE_FEED_CONNECTION_CLOSE,
    WS_PROFILE_FEED_GET_MESSAGE,
    WS_PROFILE_FEED_SEND_MESSAGE 
} from "../constants/ws-profile-feed";

  export interface IActionTypes {
    feed: TFeed;
    wsConnected: boolean;
    wsLoad: boolean;
    wsError: boolean;
    wsData: boolean;
    type: string
}
interface IWSFeed {
    data: TFeed | null;
    wsConnected: boolean;
    wsLoad: boolean;
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

export const wsProfileFeedReducer = (state = initialState, action:IActionTypes) => { 
    switch (action.type) {
        case WS_PROFILE_FEED_CONNECTION_START: return { 
            ...state, wsLoad: true, wsConnected: false, wsError: false, wsData: false, data: null
        }

        case WS_PROFILE_FEED_CONNECTION_SUCCESS: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false, wsData: false, data: null
        }

        case WS_PROFILE_FEED_CONNECTION_ERROR: return { 
            ...state, wsLoad: false, wsConnected: false, wsError: true, wsData: false, data: null
        }

        case WS_PROFILE_FEED_CONNECTION_CLOSE: return { 
            ...state, wsLoad: false, wsConnected: false, wsError: true, wsData: true
        }

        case WS_PROFILE_FEED_GET_MESSAGE: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false, wsData: true, data: action.feed
        }

        case WS_PROFILE_FEED_SEND_MESSAGE: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false
        }

        default: return state;
    }
}