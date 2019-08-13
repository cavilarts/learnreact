import { combineReducers } from 'redux';

import { REQUEST_ALBUMS, RECEIVE_ALBUMS } from './actions';

const defaultState = {
    isFetching: false,
    albumsList: []
};

function albums(state = defaultState, action) {
    switch(action.type) {
        case REQUEST_ALBUMS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_ALBUMS:
            return Object.assign({}, state, {
                isFetching: false,
                albumsList: action.albums
            });
        default:
            return state;
    }
}

const rootreducer = combineReducers({
    albums
});

export default rootreducer;