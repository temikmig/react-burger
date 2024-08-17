import { BASE_URL } from "../../utils/config";

import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSE,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE
} from "../constants/ws";

import { TFeed, TIngredient } from "../../utils/types";

export interface IWSConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START;
    url: string;
}

export interface IWSConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWSConnectionCloseAction {
    readonly type: typeof WS_CONNECTION_CLOSE;
}

export interface IWSGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE;
    payload: ReadonlyArray<TFeed>
}

export interface IWSSendMessageAction {
    readonly type: typeof WS_SEND_MESSAGE;
}

export const wsConnectionStart = (url:string):IWSConnectionStartAction => ({
    type: WS_CONNECTION_START,
    url
});

export const wsConnectionSuccess = ():IWSConnectionSuccessAction => ({
    type: WS_CONNECTION_SUCCESS
});

export const wsConnectionError = ():IWSConnectionErrorAction => ({
    type: WS_CONNECTION_ERROR
});

export const wsConnectionClose = ():IWSConnectionCloseAction => ({
    type: WS_CONNECTION_CLOSE
});

export const wsGetMessage = (payload:ReadonlyArray<TFeed>):IWSGetMessageAction => ({
    type: WS_GET_MESSAGE,
    payload
});

export const wsSendMessage = ():IWSSendMessageAction => ({
    type: WS_SEND_MESSAGE
});

export type TWebSocketActions =
  IWSConnectionStartAction
  | IWSConnectionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionCloseAction
  | IWSGetMessageAction
  | IWSSendMessageAction;