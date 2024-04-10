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
      description: "First todo....",
      isCompleted: false,
    },
    {
      description: "Second todo....",
      isCompleted: true,
    },
  ]);

  // Function that will add todos
  const addTodo = (todo) => {
    // Add new todo to the todos array.
    setTodos([...todos, todo]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, useTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
