import React, { useState } from 'react';
import './ToDo.css';
import List from './List';
import Add from './Add';
import 'bootstrap/dist/css/bootstrap.css';

function ToDo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskName) => {
    const updatedTasks = tasks.filter((task) => task.taskName !== taskName);
    setTasks(updatedTasks);
  };

  const changeTaskDoneState = (taskName) => {
    const updatedTasks = tasks.map((task) => {
      if (task.taskName === taskName) task.doneState = !task.doneState;
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="toDoContainer shadow-lg border">
      <List
        tasks={tasks}
        removeTask={removeTask}
        changeTaskDoneState={changeTaskDoneState}
      />
      <hr style={{ borderColor: 'gray' }} />
      <Add addTask={addTask} />
    </div>
  );
}

export default ToDo;
