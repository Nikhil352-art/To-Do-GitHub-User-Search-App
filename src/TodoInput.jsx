import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './todoSlice';

export default function TodoInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAdd}>Save Task</button>
    </div>
  );
}