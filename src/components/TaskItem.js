import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../store/actions';

const TaskItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTask(id))}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
      <button onClick={() => dispatch(deleteTask(id))}>Delete</button>
    </div>
  );
};

export default TaskItem;
