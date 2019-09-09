import TodoActionsTypes from './TodoActionsTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    addTodo (text) {
        TodoDispatcher.dispatch({
            type: TodoActionsTypes.ADD_TODO,
            text
        });
    },

    deleteTodo (id) {
        TodoDispatcher.dispatch({
            type: TodoActionsTypes.DELETE_TODO,
            id
        });
    },

    toggleTodo (id) {
        TodoDispatcher.dispatch({
            type: TodoActionsTypes.TOGGLE_TODO,
            id
        });
    }
};

export default Actions;