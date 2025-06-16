import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions/taskActions';
import type { Task } from '../redux/types';

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border p-2 mb-2">
      <span
        onClick={() => dispatch(toggleTask(task.id))}
        className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
      >
        {task.text}
      </span>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
