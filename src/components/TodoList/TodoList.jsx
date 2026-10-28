import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem.jsx';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Do homework in math', isCompleted: false },
    { id: 2, title: 'Do reading in English', isCompleted: true },
    { id: 3, title: 'Fill exercise in science', isCompleted: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    const trimmedTitle = newTask.trim();

    if (trimmedTitle === '' || tasks.some(task => task.title === trimmedTitle)) {
      return;
    }

    const newTaskObject = {
      id: Date.now(),
      title: trimmedTitle,
      isCompleted: false,
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  return (
    <div className="todo-container">
      <h2>רשימת משימות</h2>

      <form onSubmit={handleAddTask} className="todo-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="הוסיפי משימה חדשה..."
          className="todo-input"
        />
        <button type="submit" className="todo-button">אישור</button>
      </form>
      
      <ul className="todo-list">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;