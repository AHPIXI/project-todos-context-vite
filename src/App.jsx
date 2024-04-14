import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { UserGreeting } from "./components/UserGreeting";
import { TodoProvider } from "./contexts/TodoContext";

export const App = () => {
  return (
    <main>
      <TodoProvider>
        <UserGreeting />
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </main>
  );
};
