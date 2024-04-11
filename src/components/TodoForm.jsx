import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import "./TodoForm.css";

/**
 * Action
 * - Add a todo
 */

/**
 * TODOS:
 * Remove text in input field after adding new task
 *
 */

export const TodoForm = () => {
  const { addTodo } = useTodo();
  const [newTodo, setNewTodo] = useState({
    description: "",
    isCompleted: false,
  });

  const handleChange = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo({ description: "" });
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
          value={newTodo.todotext}
          onChange={handleChange}
        />
        <button>Add task</button>
      </form>
    </>
  );
};
