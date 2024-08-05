import type { Middleware, MiddlewareAPI } from 'redux';
import type { TApplicationActions, AppDispatch, RootState } from '../types';

import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from "../constants/ws";

export type TWSActions = {
  wsInit: typeof WS_CONNECTION_START,
  onOpen: typeof WS_CONNECTION_SUCCESS,
  onError: typeof WS_CONNECTION_ERROR,
  onClose: typeof WS_CONNECTION_CLOSE,
  onMessage: typeof WS_GET_MESSAGE,
  wsSendMessage: typeof WS_SEND_MESSAGE
};

export const socketMiddleware = (wsActions: TWSActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TApplicationActions) => {
      

      const { dispatch } = store;
      const { wsInit, onOpen, onError, onClose, onMessage, wsSendMessage } = wsActions;

      if(action.type===wsInit) {
        socket = new WebSocket(action.url);
      }

      if(socket) {
        socket.onopen = () => {
          dispatch({ type: onOpen });
        };

        socket.onerror = () => {
          dispatch({ type: onError });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = () => {
          dispatch({ type: onClose });
        };
      }

      next(action);
    };
  }) as Middleware;
};