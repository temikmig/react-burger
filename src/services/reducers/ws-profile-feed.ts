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
    wsConnected: boolean;
    wsLoad: boolean;
    wsError: false
}

const initialState:IWSFeed = {
    data: [],
    ingredients: [],
    wsConnected: false,
    wsLoad: false,
    wsError: false
};

export const wsProfileFeedReducer = (state = initialState, action:IActionTypes) => { 
    switch (action.type) {
        case WS_PROFILE_FEED_CONNECTION_START: return { 
            ...state, wsLoad: true, wsConnected: false, wsError: false
        }

        case WS_PROFILE_FEED_CONNECTION_SUCCESS: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false
        }

        case WS_PROFILE_FEED_CONNECTION_ERROR: return { 
            ...state, wsLoad: false, wsConnected: false, wsError: true
        }

        case WS_PROFILE_FEED_CONNECTION_CLOSE: return { 
            ...state, wsConnected: false, data: []
        }

        case WS_PROFILE_FEED_GET_MESSAGE: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false, data: action.feed
        }

        case WS_PROFILE_FEED_SEND_MESSAGE: return { 
            ...state, wsLoad: false, wsConnected: true, wsError: false
        }

        default: return state;
    }
}