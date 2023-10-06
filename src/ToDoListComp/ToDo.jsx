import React, { useState } from 'react';
import './ToDo.css';
import List from './List';
import Add from './Add';
import 'bootstrap/dist/css/bootstrap.css';

function ToDo() {
	const [tasks, setTasks] = useState([]);
	const [count, setCount] = useState(0);

	const addTask = (task) => {
		setTasks([...tasks, task]);
		setCount(count + 1); // Increment the count when adding a task
	};

	const removeTask = (taskid) => {
		const updatedTasks = tasks.filter((task) => task.taskid !== taskid);
		setTasks(updatedTasks);
	};

	const changeTaskDoneState = (taskid) => {
		const updatedTasks = tasks.map((task) => {
			if (task.taskid === taskid) task.doneState = !task.doneState;
			return task;
		});
		setTasks(updatedTasks);
	};

	return (
		<div className='toDoContainer shadow-lg border'>
			<List tasks={tasks} removeTask={removeTask} changeTaskDoneState={changeTaskDoneState} />
			<hr style={{ borderColor: 'gray' }} />
			<Add addTask={addTask} count={count} />
		</div>
	);
}

export default ToDo;
