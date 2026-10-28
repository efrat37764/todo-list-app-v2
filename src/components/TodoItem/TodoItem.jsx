import React from 'react';
import './TodoItem.css';

function TodoItem({ task }) {

  const { title, isCompleted } = task;

  const getStatusStyle = (completed) => {
    return completed
      ? { backgroundColor: '#e8f5e9', color: '#2e7d32' } // משימה שבוצעה
      : { backgroundColor: '#fffde7', color: '#f57f17' }; // משימה שטרם בוצעה
  };

  return (
    <li className="todo-item" style={getStatusStyle(isCompleted)}>{title}</li>
  );
}

export default TodoItem;