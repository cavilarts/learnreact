import React from 'react';
import ReactDom from 'react-dom';

import AppContainer from './containers/AppContainer';

const applicationNode = document.getElementById('app');

ReactDom.render(<AppContainer />, applicationNode);

import TodoActions from './data/TodoActions';

TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');