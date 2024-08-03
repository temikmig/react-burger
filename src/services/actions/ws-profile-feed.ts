import { TFeed } from "../../utils/types";
import {
    WS_PROFILE_FEED_CONNECTION_START,
    WS_PROFILE_FEED_CONNECTION_SUCCESS,
    WS_PROFILE_FEED_CONNECTION_ERROR,
    WS_PROFILE_FEED_CONNECTION_CLOSE,
    WS_PROFILE_FEED_GET_MESSAGE,
    WS_PROFILE_FEED_SEND_MESSAGE
} from "../constants/ws-profile-feed";

export interface IWSProfileFeedConnectionStartAction {
    readonly type: typeof WS_PROFILE_FEED_CONNECTION_START;
}

export interface IWSProfileFeedConnectionSuccessAction {
    readonly type: typeof WS_PROFILE_FEED_CONNECTION_SUCCESS;
}

export interface IWSProfileFeedConnectionErrorAction {
    readonly type: typeof WS_PROFILE_FEED_CONNECTION_ERROR;
}

export interface IWSProfileFeedConnectionCloseAction {
    readonly type: typeof WS_PROFILE_FEED_CONNECTION_CLOSE;
}

export interface IWSProfileFeedGetMessageAction {
    readonly type: typeof WS_PROFILE_FEED_GET_MESSAGE;
    feed:ReadonlyArray<TFeed>
}

export interface IWSProfileFeedSendMessageAction {
    readonly type: typeof WS_PROFILE_FEED_SEND_MESSAGE;
}

export const wsProfileFeedConnectionStart = ():IWSProfileFeedConnectionStartAction => ({
    type: WS_PROFILE_FEED_CONNECTION_START
});

export const wsProfileFeedConnectionSuccess = ():IWSProfileFeedConnectionSuccessAction => ({
    type: WS_PROFILE_FEED_CONNECTION_SUCCESS
});

export const wsProfileFeedConnectionError = ():IWSProfileFeedConnectionErrorAction => ({
    type: WS_PROFILE_FEED_CONNECTION_ERROR
});

export const wsProfileFeedConnectionClose = ():IWSProfileFeedConnectionCloseAction => ({
    type: WS_PROFILE_FEED_CONNECTION_CLOSE
});

export const wsProfileFeedGetMessage = (feed:ReadonlyArray<TFeed>):IWSProfileFeedGetMessageAction => ({
    type: WS_PROFILE_FEED_GET_MESSAGE,
    feed
});

export const wsProfileFeedSendMessage = ():IWSProfileFeedSendMessageAction => ({
    type: WS_PROFILE_FEED_SEND_MESSAGE
});

export type TWSProfileFeedActions =
  | IWSProfileFeedConnectionStartAction
  | IWSProfileFeedConnectionSuccessAction
  | IWSProfileFeedConnectionErrorAction
  | IWSProfileFeedConnectionCloseAction
  | IWSProfileFeedGetMessageAction
  | IWSProfileFeedSendMessageAction;