import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import "./TodoForm.css";

export const TodoForm = () => {
  const { addTodo, removeTodo } = useTodo();
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      id: window.crypto.randomUUID(),
      description: newTodo,
      isCompleted: false,
    });
    setNewTodo("");
    // console.log(event);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Create new todo</label>
        <input
          type="text"
          name="description"
          placeholder="Add a new todo here..."
          value={newTodo}
          onChange={handleChange}
        />
        <button>Add task</button>
      </form>
    </>
  );
};
