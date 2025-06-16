export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[];
}

export type TaskAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'TOGGLE_TASK'; payload: number }
  | { type: 'DELETE_TASK'; payload: number };
