import type { TaskAction, TaskState } from '../types';

const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = (
  state = initialState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case 'ADD_TASK':
      return { tasks: [...state.tasks, action.payload] };
    case 'TOGGLE_TASK':
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case 'DELETE_TASK':
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};
