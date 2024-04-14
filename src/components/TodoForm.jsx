import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import "./TodoForm.css";

export const TodoForm = () => {
  const { addTodo } = useTodo();
  const [newTodo, setNewTodo] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    setNewTodo(event.target.value);
    // Remove error message when user starts typing
    setErrorMsg("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if todo is empty
    if (!newTodo.trim()) {
      setErrorMsg("Oops, you need to add a todo");
      return; // Exit if todo is empty
    }

    addTodo({
      id: window.crypto.randomUUID(),
      description: newTodo,
      isCompleted: false,
    });

    // Clear all input fields
    setNewTodo("");
    setErrorMsg("");
  };

  return (
    <>
      <form className="form__container" onSubmit={handleSubmit}>
        <p className="errosMsg">{errorMsg}</p>
        <label>
          <input
            type="text"
            name="description"
            placeholder="Add a new todo here..."
            value={newTodo}
            onChange={handleChange}
          />
        </label>
        <button>+ Add task</button>
      </form>
    </>
  );
};
