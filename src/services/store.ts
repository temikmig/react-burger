import { Store, createStore, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers';
import { socketMiddleware, TWSActions } from './middleware/ws-middleware';

import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from "./constants/ws";

const wsFeedActions: TWSActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onClose: WS_CONNECTION_CLOSE,
  onMessage: WS_GET_MESSAGE,
  wsSendMessage: WS_SEND_MESSAGE
};

const a: any = window;
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(wsFeedActions))
);

export const store: Store<any> = createStore(
  rootReducer,
  enhancer
);

export default store;