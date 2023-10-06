import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Task from './Task';

function List(props) {
	const { tasks } = props;

	return (
		<div className='listContainer mb-4'>
			{tasks.map((task, index) => (
				<Task
					key={index}
					taskName={task.taskName}
					taskid={task.taskid}
					removeTask={props.removeTask}
					changeTaskDoneState={props.changeTaskDoneState}
					doneState={task.doneState}
				/>
			))}
		</div>
	);
}

export default List;
