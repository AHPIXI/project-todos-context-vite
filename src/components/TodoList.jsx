import "./TodoList.css";
import { useTodo } from "../contexts/TodoContext";

/**
 *
 * Actions
 * - completed / uncompleted ✅
 * - update
 * - remove
 *
 * Fetch
 * - fetch all todos ✅
 *
 * Todos
 * - Only display list when there are todos added ✅
 * - Add tasks into localstorage.
 */

export const TodoList = () => {
  // Fetch all todos from globel state
  const { todos, updateTodo } = useTodo();

  // Function that handles uncompleted or completed todos
  const handleCheckboxChange = (id) => {
    // Create a new variable for updated todos and loop throught existing todos to find todo with matching id.
    // Set the matching todo to the opposite value. If completed set to uncompleted and vice versa.
    const updatedTodos = todos.map((todo) =>
      // This is a ternary operator. "condition ? if value is true : if value is false"
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    updateTodo(updatedTodos);
  };

  return (
    <>
      {todos.length > 0 && (
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
                      <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        // Listen to changes and pass the id as an argument to handleCheck.. funtion
                        onChange={() => handleCheckboxChange(todo.id)}
                      />
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
                        <input
                          type="checkbox"
                          checked
                          onChange={() => handleCheckboxChange(todo.id)}
                        />
                        <p className="description">{todo.description}</p>
                        <button className="delete-btn">Delete</button>
                      </form>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
