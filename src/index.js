import React from 'react';
import ReactDom from 'react-dom';

import App from './app';

const applicationNode = document.getElementById('app');

ReactDom.render(<App />, applicationNode);