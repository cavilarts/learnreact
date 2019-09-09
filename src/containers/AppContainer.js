import { Container } from 'flux/utils';

import App from '../views/app';
import TodoActions from '../data/TodoActions';
import TodoStore from '../data/TodoStore';

function getStores () {
    return [
        TodoStore
    ];
}

function getStates () {
    return {
        todos: TodoStore.getState(),
        onDeleteTodo: TodoActions.deleteTodo,
        onToggleTodo: TodoActions.toggleTodo
    };
}

export default Container.createFunctional(App, getStores, getStates)