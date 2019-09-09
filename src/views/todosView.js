import React from 'react';

let onDeleteTodo;
let onToggleTodo;

export default function TodosView (props) {
    var content = null;

    if (props.todos.size) {
        onDeleteTodo = props.onDeleteTodo;
        onToggleTodo = props.onToggleTodo;
        content = renderTodosSection(props);
    }

    return content;
};

function renderTodosSection (props) {
    return (
        <section id="todos--section">
            <ul id="todos--list">
                {[...props.todos.values()].reverse().map(renderTodoList)}
            </ul>
        </section>
    )
}

function  renderTodoList (todo, id) {
    return (
        <li key={id}>
            <div>
                <input 
                    className="todo--toggle"
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => onToggleTodo(todo.id)}
                />
                <label>{todo.text}</label>
                <button className="todo--remove" onClick={() => onDeleteTodo(todo.id)}/>
            </div>
        </li>
    )
}