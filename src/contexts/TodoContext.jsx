// GLOBAL STATE file for adding, updating and removing todos

/**
 * 1 step -> Pass todos to TodoList component.
 * 2 step -> Add a new todo
 */

import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // This variable will contain all the todos
  const [todos, setTodos] = useState([
    {
      id: 4352345345,
      description: "First todo....",
      isCompleted: false,
    },
    {
      id: 3983974832,
      description: "Second todo....",
      isCompleted: true,
    },
  ]);

  // Function that will add todos
  const addTodo = (todo) => {
    // Add new todo to the todos array.
    setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo) => {
    // Map through the todos array and replace the todo with the same id
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    // Replace the todo with the updated Todo
    setTodos(updatedTodo);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
