import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './Task.css';
import { PiTrashSimple } from 'react-icons/pi';
import { FiCheck } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

function Task(props) {
	const removeTask = props.removeTask;
	const taskid = props.taskid;
	const taskName = props.taskName;
	const changeDone = props.changeTaskDoneState;

	const handleRemoveTask = () => {
		removeTask(taskid);
	};

	const handleDoneClick = () => {
		changeDone(taskid);
	};

	return (
		<div className={`taskContainer ${props.doneState ? 'done' : 'notDone'}`}>
			<p className='m-2' style={{ fontFamily: 'Times New Roman, Times, serif' }}>
				{taskName}
			</p>
			<div>
				<Button variant={props.doneState ? 'warning' : 'success'} className='mx-2' onClick={handleDoneClick}>
					{props.doneState ? <AiOutlineClose size={25} /> : <FiCheck size={25} />}
				</Button>
				<Button variant='danger' onClick={handleRemoveTask}>
					<PiTrashSimple size={25} />
				</Button>
			</div>
		</div>
	);
}

export default Task;
