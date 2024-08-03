import type { Middleware, MiddlewareAPI } from 'redux';
import type { TApplicationActions, AppDispatch, RootState } from '../types';

import { TWSFeedActions } from '../actions/ws-feed';
import { TWSProfileFeedActions } from '../actions/ws-profile-feed';

import {
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSE,
  WS_FEED_GET_MESSAGE,
  WS_FEED_SEND_MESSAGE
} from "../constants/ws-feed";

import {
  WS_PROFILE_FEED_CONNECTION_START,
  WS_PROFILE_FEED_CONNECTION_SUCCESS,
  WS_PROFILE_FEED_CONNECTION_ERROR,
  WS_PROFILE_FEED_CONNECTION_CLOSE,
  WS_PROFILE_FEED_GET_MESSAGE,
  WS_PROFILE_FEED_SEND_MESSAGE
} from "../constants/ws-profile-feed";
import { getCookie, mapFeedItems } from '../../utils/utils';
import { TIngredient } from '../../utils/types';


export type TWSActions = {
  wsInit: typeof WS_FEED_CONNECTION_START | typeof WS_PROFILE_FEED_CONNECTION_START,
  onOpen: typeof WS_FEED_CONNECTION_SUCCESS | typeof WS_PROFILE_FEED_CONNECTION_SUCCESS,
  onError: typeof WS_FEED_CONNECTION_ERROR | typeof WS_PROFILE_FEED_CONNECTION_ERROR,
  onClose: typeof WS_FEED_CONNECTION_CLOSE | typeof WS_PROFILE_FEED_CONNECTION_CLOSE,
  onMessage: typeof WS_FEED_GET_MESSAGE | typeof WS_PROFILE_FEED_GET_MESSAGE,
  wsSendMessage: typeof WS_FEED_SEND_MESSAGE | typeof WS_PROFILE_FEED_SEND_MESSAGE
};

export const socketMiddleware = (wsUrl: string, wsActions: TWSActions, includeToken: boolean = false): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TApplicationActions) => {
      

      const { dispatch, getState } = store;
      const { type } = action;
      const { wsInit, onOpen, onError, onClose, onMessage, wsSendMessage } = wsActions;

      // console.log(type);

      if(type===wsInit) {
        const token = includeToken ? `?token=${getCookie('accessToken')}` : '';
        socket = new WebSocket(`${wsUrl}${token}`);
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

          dispatch({ type: onMessage, feed: restParsedData });
        };

        socket.onclose = () => {
          dispatch({ type: onClose });
        };
      }

      next(action);
    };
  }) as Middleware;
};