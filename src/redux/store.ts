import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { taskReducer } from './reducers/taskReducer';

const rootReducer = combineReducers({
  taskState: taskReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
