import "./TodoList.css";

export const TodoList = () => {
  const todos = [
    {
      id: 1,
      description: "First todo....",
    },
    {
      id: 2,
      description: "Second todo....",
    },
  ];

  return (
    <div className="todo-list-wrapper">
      <div className="todo-section uncompleted-section">
        <h3>Uncompleted tasks</h3>
        {/* Mapp all uncompleted lists */}
        {todos.map((todo) => (
          <div key={todo.id} className="uncompleted-tasks">
            {/* setCompleted */}
            <div className="checkbox">checkbox</div>
            <p className="description">{todo.description}</p>
            <button className="update-btn">Update</button>
          </div>
        ))}
      </div>
      <div className="todo-section completed-section">
        <h3>Completed tasks</h3>
        {/* Mapp all completed lists */}
      </div>
    </div>
  );
};
