import { wsReducer, initialState as wsInitialState } from './ws';
import * as types from '../constants/ws'
import { testWsPayload } from '../../utils/test-data';

describe('ws reducer', () => {
    it('should handle WS_CONNECTION_START', () => {    
        const initialState = {...wsInitialState};

        expect(wsReducer(initialState, { type: types.WS_CONNECTION_START })).toEqual({
            ...initialState,
            wsLoad: true,
            wsConnected: false,
            wsError: false,
            data: null
        });
    });

    it('should handle WS_CONNECTION_SUCCESS', () => {    
        const initialState = {...wsInitialState};

        expect(wsReducer(initialState, { type: types.WS_CONNECTION_SUCCESS })).toEqual({
            ...initialState,
            wsLoad: false,
            wsConnected: true,
            wsError: false,
            data: null
        });
    });

    it('should handle WS_CONNECTION_ERROR', () => {    
        const initialState = {...wsInitialState};

        expect(wsReducer(initialState, { type: types.WS_CONNECTION_ERROR })).toEqual({
            ...initialState,
            wsLoad: false,
            wsConnected: false,
            wsError: true,
            data: null
        });
    });

    it('should handle WS_CONNECTION_CLOSE', () => {    
        const initialState = {...wsInitialState};

        expect(wsReducer(initialState, { type: types.WS_CONNECTION_CLOSE })).toEqual({
            ...initialState,
            wsLoad: false,
            wsConnected: false,
            wsError: false,
            data: null
        });
    });

    it('should handle WS_GET_MESSAGE', () => {    
        const initialState = {...wsInitialState};

        expect(wsReducer(initialState, { type: types.WS_GET_MESSAGE, payload: testWsPayload })).toEqual({
            ...initialState,
            wsLoad: false,
            wsConnected: true,
            wsError: false,
            data: testWsPayload
        });
    });

    it('should handle WS_SEND_MESSAGE', () => {    
        const initialState = {...wsInitialState};

        expect(wsReducer(initialState, { type: types.WS_SEND_MESSAGE })).toEqual({
            ...initialState,
            wsLoad: false,
            wsConnected: false,
            wsError: false
        });
    });
});