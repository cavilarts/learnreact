import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAlbumsIfNeeded } from '../actions/index';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Future implementation: render albums</div>
        );
    }
}

App.propTypes = {
    albumsList: Proptypes.arrayOf(Proptypes.object).isRequired,
    dispatch: Proptypes.func.isRequired,
    isFetching: Proptypes.bool.isRequired
}

function mapStateToProps(state) {
    const { albumsList, isFetching } = state;

    return {
        albumsList,
        isFetching
    }
}

export default connect(mapStateToProps)(App);