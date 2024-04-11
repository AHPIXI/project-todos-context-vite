import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";

export const App = () => {
  return (
    <main>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </main>
  );
};
