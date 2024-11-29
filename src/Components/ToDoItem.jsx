import React from 'react';

const ToDoItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none', 
        color: task.completed ? 'red' : 'white',
    }}>
      {task.text}
      <button onClick={onToggleComplete}>
        {task.completed ? 'Mark as incomplete' : 'Mark as Complete'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ToDoItem;
