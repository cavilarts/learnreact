export const REQUEST_ALBUMS = 'REQUEST_ALBUMS';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

function requestAlbums(query) {
    return {
        type: REQUEST_ALBUMS,
        query
    };
}

function receiveAlbums(query, json) {
    return {
        json,
        type: RECEIVE_ALBUMS,
        query
    };
}

function fetchAlbums(query) {
    return dispatch => {
        dispatch(requestAlbums(query));
        return fetch('ALBUMS URL')
            .then(response => response.json)
            .then(json => dispatch(receiveAlbums(query, json)))
    }
}

export function fetchAlbumsIfNeeded (query) {
    return (dispatch, getState) => {
        let state = getState();

        if (!state) {
            return dispatch(fetchAlbums(state));
        }
    };
}