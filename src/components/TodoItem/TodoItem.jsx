import React from 'react';
import './TodoItem.css';

function TodoItem({ task, onToggleComplete }) {

  const { id, title, isCompleted } = task;

  const getStatusStyle = (completed) => {
    return completed
      ? { backgroundColor: '#e8f5e9', color: '#25b22c' } // משימה שבוצעה
      : { backgroundColor: '#fffde7', color: '#f57f17' }; // משימה שטרם בוצעה
  };

  return (
    <li className="todo-item" style={getStatusStyle(isCompleted)}>
      <span>{title}</span>

      {!isCompleted && (
        <button 
          className="complete-button" 
          onClick={() => onToggleComplete(id)}
        > המשימה בוצעה</button>
      )}
    </li>
  );
}

export default TodoItem;