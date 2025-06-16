import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.taskState.tasks);

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
