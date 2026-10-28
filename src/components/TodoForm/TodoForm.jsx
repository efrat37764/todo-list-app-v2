import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onAddTask }) {

  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="הוסיפי משימה חדשה..."
        className="todo-input"
      />
      <button type="submit" className="todo-button">אישור</button>
    </form>
  );
}

export default TodoForm;