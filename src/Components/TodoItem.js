import React from 'react';

const TodoItem = ({ todo, index, toggleTodo, removeTodo }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(index)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </li>
  );
};

export default TodoItem;
