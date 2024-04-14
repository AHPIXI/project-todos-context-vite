import "./TodoList.css";
import { useTodo } from "../contexts/TodoContext";
import { useState } from "react";

export const TodoList = () => {
  // Fetch all todos from globel state
  const { todos, updateTodo, removeTodo, checkTodo } = useTodo();
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [editMode, setEditMode] = useState(null);

  // Function that will handle update click and activate edit mode
  const handleUpdateClick = (id) => {
    setEditMode(id);
  };

  // Function that handles uncompleted or completed todos
  const handleCheckboxChange = (id) => {
    // Create a new variable for updated todos and loop throught existing todos to find todo with matching id.
    // Set the matching todo to the opposite value. If completed set to uncompleted and vice versa.
    const checkedTodos = todos.map((todo) =>
      // This is a ternary operator. "condition ? if value is true : if value is false"
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    checkTodo(checkedTodos);
  };

  // Function that will save the incomming changes and close edit mode.
  const handleSave = (id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.description = updatedDescription;
    updateTodo(updatedTodo);
    setEditMode(null);
  };

  return (
    <>
      {todos.length > 0 && (
        <div className="todo-list-wrapper">
          <div className="todo-section uncompleted-section">
            <h3>My tasks</h3>
            {/* Mapp all uncompleted lists */}
            {todos.map(
              (todo) =>
                !todo.isCompleted && (
                  <div key={todo.id} className="todo-wrapper">
                    <form>
                      <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => handleCheckboxChange(todo.id)}
                      />
                      {/* Activate edit mode if update btn has been clicked on */}
                      {editMode === todo.id ? (
                        <>
                          <input
                            className="input__update"
                            type="text"
                            value={updatedDescription}
                            onChange={(e) =>
                              setUpdatedDescription(e.target.value)
                            }
                            placeholder={todo.description}
                          />
                          <button
                            type="button"
                            className="save-btn"
                            onClick={() => handleSave(todo.id)}
                          >
                            Save
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="description">{todo.description}</p>
                          <button
                            type="button"
                            className="update-btn"
                            onClick={() => handleUpdateClick(todo.id)}
                          >
                            Update
                          </button>
                        </>
                      )}
                    </form>
                  </div>
                )
            )}

            <div className="todo-section completed-section">
              <h3>Completed ✔</h3>
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
                        <button
                          className="delete-btn"
                          onClick={() => removeTodo(todo.id)}
                        >
                          Delete
                        </button>
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
