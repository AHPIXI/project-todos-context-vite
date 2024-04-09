import "./TodoList.css";

export const TodoList = () => {
  const todos = [
    {
      id: 1,
      description: "First todo....",
      isCompleted: false,
    },
    {
      id: 2,
      description: "Second todo....",
      isCompleted: true,
    },
  ];

  return (
    <div className="todo-list-wrapper">
      <div className="todo-section uncompleted-section">
        <h3>Uncompleted tasks</h3>
        {/* Mapp all uncompleted lists */}
        {todos.map(
          (todo) =>
            !todo.isCompleted && (
              <div key={todo.id} className="todo-wrapper">
                {/* setCompleted */}
                <div className="checkbox">checkbox</div>
                <p className="description">{todo.description}</p>
                <button className="update-btn">Update</button>
              </div>
            )
        )}

        <div className="todo-section completed-section">
          <h3>Completed tasks</h3>
          {/* Mapp all completed lists */}
          {todos.map(
            (todo) =>
              todo.isCompleted && (
                <div key={todo.id} className="todo-wrapper">
                  {/* setCompleted */}
                  <div className="checkbox">checkbox</div>
                  <p className="description">{todo.description}</p>
                  <button className="update-btn">Update</button>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
