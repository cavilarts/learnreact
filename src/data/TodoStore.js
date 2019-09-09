import Immnutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import Counter from './Counter'
import TodoActionTypes from './TodoActionsTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoStore extends ReduceStore {
    constructor () {
        super(TodoDispatcher);
    }

    getInitialState () {
        return Immnutable.OrderedMap();
    }

    reduce (state, action) {
        debugger
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                const id = Counter.increment();

                if (action.text) {
                    return state.set(id, {
                        id,
                        text: action.text,
                        complete: false
                    });
                }
            case TodoActionTypes.DELETE_TODO:
                return state.delete(action.id);
            case TodoActionTypes.TOGGLE_TODO:
                debugger
                return state.update(
                    action.id,
                    todo => { todo.complete = !todo.complete; return todo;}
                );
            default:
                return state;
        }
    }
}

export default new TodoStore();