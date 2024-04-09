import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";

export const App = () => {
  return (
    <div className="todo-container">
      <TodoForm />
      <TodoList />
    </div>
  );
};
