import React from 'react';

export default function Footer (props) {
    var content = null;

    if (props.todos.size) {
        content = (
            <footer id="footer">
                <span id="footer--todo-count">
                    <strong>{props.todos.size}</strong>
                </span>
                {' Items left'}
            </footer>
        )
    }

    return content;
};