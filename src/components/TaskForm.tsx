import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const TaskForm: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-grow"
        type="text"
        value={text}
        placeholder="Enter task..."
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4">
        Add
      </button>
    </div>
  );
};

export default TaskForm;
