import { Store, createStore, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers';
import { socketMiddleware, TWSActions } from './middleware/ws-middleware';
import { WS_URL } from '../utils/config';

import {
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_CLOSE,
  WS_FEED_GET_MESSAGE,
  WS_FEED_SEND_MESSAGE
} from "./constants/ws-feed";

import {
  WS_PROFILE_FEED_CONNECTION_START,
  WS_PROFILE_FEED_CONNECTION_SUCCESS,
  WS_PROFILE_FEED_CONNECTION_ERROR,
  WS_PROFILE_FEED_CONNECTION_CLOSE,
  WS_PROFILE_FEED_GET_MESSAGE,
  WS_PROFILE_FEED_SEND_MESSAGE
} from "./constants/ws-profile-feed";

const wsFeedActions: TWSActions = {
  wsInit: WS_FEED_CONNECTION_START,
  onOpen: WS_FEED_CONNECTION_SUCCESS,
  onError: WS_FEED_CONNECTION_ERROR,
  onClose: WS_FEED_CONNECTION_CLOSE,
  onMessage: WS_FEED_GET_MESSAGE,
  wsSendMessage: WS_FEED_SEND_MESSAGE
};

const wsFeedProfileActions: TWSActions = {
  wsInit: WS_PROFILE_FEED_CONNECTION_START,
  onOpen: WS_PROFILE_FEED_CONNECTION_SUCCESS,
  onError: WS_PROFILE_FEED_CONNECTION_ERROR,
  onClose: WS_PROFILE_FEED_CONNECTION_CLOSE,
  onMessage: WS_PROFILE_FEED_GET_MESSAGE,
  wsSendMessage: WS_PROFILE_FEED_SEND_MESSAGE
};

const a: any = window;
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(WS_URL+'/all', wsFeedActions), socketMiddleware(WS_URL, wsFeedProfileActions, true))
);

export const store: Store<any> = createStore(
  rootReducer,
  enhancer
);

export default store;