import "./UserGreeting.css";
import { useTodo } from "../contexts/TodoContext";

export const UserGreeting = () => {
  const { todos } = useTodo();
  return (
    <div className="greeting__container">
      <p>Hello, John Doe 👋</p>
      <h1>You've got {todos.length} tasks today 🗒️</h1>
    </div>
  );
};
