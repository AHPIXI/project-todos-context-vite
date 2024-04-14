// GLOBAL STATE file for adding, updating and removing todos

import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // This variable will contain all the todos
  const [todos, setTodos] = useState(() => {
    // Load todos from localstorage if exists, otherwhise return default valuse
    const storedTodos = localStorage.getItem("todos");
    return storedTodos
      ? JSON.parse(storedTodos)
      : [
          {
            id: 4352345345,
            description: "Learning about localstorage",
            isCompleted: false,
          },
          {
            id: 3983974832,
            description: "Make todo app responsive",
            isCompleted: true,
          },
        ];
  });

  useEffect(() => {
    // Save todos in localStorage when there is a change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function that will add todos
  const addTodo = (todo) => {
    // Add new todo to the todos array.
    setTodos([...todos, todo]);
  };

  const checkTodo = (checkedTodo) => {
    // Map through the todos array and replace the todo with the same id
    todos.map((todo) => (todo.id === checkedTodo.id ? checkedTodo : todo));
    // Replace the todo with the updated Todo
    setTodos(checkedTodo);
  };

  const updateTodo = (updatedTodo) => {
    // Map through the todos array and replace the todo with the same id
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    // Replace the todo with the updated Todo
    setTodos(updatedTodos);
  };

  // Function that will remove Todo
  const removeTodo = (todoToDelete) => {
    const addTodo = todos.filter((todo) => todo.id !== todoToDelete);
    setTodos(addTodo);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, removeTodo, checkTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
