import type { TaskAction } from '../types';

export const addTask = (text: string): TaskAction => ({
  type: 'ADD_TASK',
  payload: { id: Date.now(), text, completed: false },
});

export const toggleTask = (id: number): TaskAction => ({
  type: 'TOGGLE_TASK',
  payload: id,
});

export const deleteTask = (id: number): TaskAction => ({
  type: 'DELETE_TASK',
  payload: id,
});
