import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Todo() {
  return (
    <div style={{ width: 400, margin: '2rem auto' }}>
      <h2>To-Do App</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}