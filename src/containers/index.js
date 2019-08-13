import React, { Component } from 'react';
import { Provider } from 'redux';

import configureStore from '../stores/index';
import App from './components/index';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider>
                <AsyncApp />
            </Provider>
        );
    }
}
