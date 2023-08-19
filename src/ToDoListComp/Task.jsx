import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './Task.css';
import { PiTrashSimple } from 'react-icons/pi';
import { FiCheck } from 'react-icons/fi';

function Task(props) {
  const removeTask = props.removeTask;
  const taskName = props.taskName;
  const changeDone = props.changeTaskDoneState;

  const handleRemoveTask = () => {
    removeTask(taskName);
  };

  const handleDoneClick = () => {
    changeDone(taskName);
  };

  return (
    <div className={`taskContainer ${props.doneState ? 'done' : 'notDone'}`}>
      <p
        className="m-2"
        style={{ fontFamily: 'Times New Roman, Times, serif' }}
      >
        {taskName}
      </p>
      <div>
        <Button variant="success" className="mx-2" onClick={handleDoneClick}>
          <FiCheck size={25} />
        </Button>
        <Button variant="danger" onClick={handleRemoveTask}>
          <PiTrashSimple size={25} />
        </Button>
      </div>
    </div>
  );
}

export default Task;
