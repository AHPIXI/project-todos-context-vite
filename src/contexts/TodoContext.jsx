// This is the global state file

import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // This variable will contain all the todos
  const [todos, setTodos] = useState([
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
  ]);

  /**
   * Pass todos to TodoList component.
   */

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
