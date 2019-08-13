import React from 'react';
import { render } from 'react-dom';

import Root from './containers/index';

const applicationNode = document.getElementById('app');

render(<Root />, applicationNode);