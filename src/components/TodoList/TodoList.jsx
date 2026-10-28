import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem.jsx';
import TodoForm from '../TodoForm/TodoForm.jsx';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Do homework in math', isCompleted: false },
    { id: 2, title: 'Do reading in English', isCompleted: true },
    { id: 3, title: 'Fill exercise in science', isCompleted: false },
  ]);

  const handleAddNewTask = (taskTitle) => {
    const trimmedTitle = taskTitle.trim();

    if (trimmedTitle === '' || tasks.some(task => task.title === trimmedTitle)) {
      return;
    }

    const newTaskObject = {
      id: Date.now(),
      title: trimmedTitle,
      isCompleted: false,
    };

    setTasks([...tasks, newTaskObject]);
  };

  return (
    <div className="todo-container">
      <h2>רשימת משימות</h2>

      <TodoForm onAddTask={handleAddNewTask} />
      
      <ul className="todo-list">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;