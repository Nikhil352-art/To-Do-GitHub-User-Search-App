import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, setFilter } from './todoSlice';

export default function TodoList() {
  const tasks = useSelector(state => state.todo.tasks);
  const filter = useSelector(state => state.todo.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(t => t.text.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        style={{ marginBottom: '1rem' }}
      />
      <div>
        {filteredTasks.length === 0 ? <p>No tasks found.</p> : filteredTasks.map(task => (
          <div key={task.id} style={{border: '1px solid #ccc', margin: '0.5rem 0', padding: '0.5rem'}}>
            <span>{task.text}</span>
            <button onClick={() => dispatch(deleteTask(task.id))} style={{ marginLeft: '1rem' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}