import "./TodoList.css";

/**
 *
 * Actions
 * - completed / uncompleted
 * - update
 * - remove
 *
 * Access
 * - todos
 */

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
      <p className="totals">Total of tasks: {todos.length}</p>
      <div className="todo-section uncompleted-section">
        <h3>Uncompleted tasks</h3>
        {/* Mapp all uncompleted lists */}
        {todos.map(
          (todo) =>
            !todo.isCompleted && (
              <div key={todo.id} className="todo-wrapper">
                <form>
                  <input type="checkbox" />
                  <p className="description">{todo.description}</p>
                  {/* This button should say Save after clicking on update */}
                  <button className="update-btn">Update</button>
                </form>
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
                  <form>
                    <input type="checkbox" />
                    <p className="description">{todo.description}</p>
                    <button className="delete-btn">Delete</button>
                  </form>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
