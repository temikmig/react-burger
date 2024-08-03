import { BASE_URL } from "../../utils/config";

import {
    WS_FEED_CONNECTION_START,
    WS_FEED_CONNECTION_SUCCESS,
    WS_FEED_CONNECTION_ERROR,
    WS_FEED_CONNECTION_CLOSE,
    WS_FEED_GET_MESSAGE,
    WS_FEED_SEND_MESSAGE
} from "../constants/ws-feed";

import { TFeed, TIngredient } from "../../utils/types";

export interface IWSFeedConnectionStartAction {
    readonly type: typeof WS_FEED_CONNECTION_START;
}

export interface IWSFeedConnectionSuccessAction {
    readonly type: typeof WS_FEED_CONNECTION_SUCCESS;
}

export interface IWSFeedConnectionErrorAction {
    readonly type: typeof WS_FEED_CONNECTION_ERROR;
}

export interface IWSFeedConnectionCloseAction {
    readonly type: typeof WS_FEED_CONNECTION_CLOSE;
}

export interface IWSFeedGetMessageAction {
    readonly type: typeof WS_FEED_GET_MESSAGE;
    feed:ReadonlyArray<TFeed>
}

export interface IWSFeedSendMessageAction {
    readonly type: typeof WS_FEED_SEND_MESSAGE;
}

export const wsFeedConnectionStart = ():IWSFeedConnectionStartAction => ({
    type: WS_FEED_CONNECTION_START
});

export const wsFeedConnectionSuccess = ():IWSFeedConnectionSuccessAction => ({
    type: WS_FEED_CONNECTION_SUCCESS
});

export const wsFeedConnectionError = ():IWSFeedConnectionErrorAction => ({
    type: WS_FEED_CONNECTION_ERROR
});

export const wsFeedConnectionClose = ():IWSFeedConnectionCloseAction => ({
    type: WS_FEED_CONNECTION_CLOSE
});

export const wsFeedGetMessage = (feed:ReadonlyArray<TFeed>):IWSFeedGetMessageAction => ({
    type: WS_FEED_GET_MESSAGE,
    feed
});

export const wsFeedSendMessage = ():IWSFeedSendMessageAction => ({
    type: WS_FEED_SEND_MESSAGE
});

export type TWSFeedActions =
  | IWSFeedConnectionStartAction
  | IWSFeedConnectionSuccessAction
  | IWSFeedConnectionErrorAction
  | IWSFeedConnectionCloseAction
  | IWSFeedGetMessageAction
  | IWSFeedSendMessageAction;