export default function TodoItem({ tarea, toggleComplete }) {
  return (
    <div>
      <span>{tarea}</span>
      <input type="checkbox" onChange={toggleComplete} />
    </div>
  );
}
