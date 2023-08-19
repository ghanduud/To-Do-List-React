import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './Add.css';

function Add(props) {
  const { addTask } = props;
  const [task, setTask] = useState({
    taskName: '',
    doneState: false,
  });

  const handleAddClick = () => {
    addTask({ taskName: task, doneState: false });
    setTask({
      taskName: '',
      doneState: false,
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddClick();
    }
  };

  return (
    <div className="addContainer mt-5 mx-3 d-flex justify-content-between">
      <div>
        <label htmlFor="taskName" className="mx-3 fw-bold">
          Task
        </label>
        <input
          type="text"
          name="taskName"
          id="taskName"
          placeholder="Task Name"
          value={task.taskName}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          className="border p-2"
        />
      </div>
      <Button variant="primary mb-1 mx-4" onClick={handleAddClick}>
        Add
      </Button>
    </div>
  );
}

export default Add;
