import "./UserGreeting.css";
import { useTodo } from "../contexts/TodoContext";

export const UserGreeting = () => {
  const { todos } = useTodo();
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="userinfo__container">
      <div className="greeting__container">
        <p className="greeting">Hello, John Doe 👋</p>
        <h1>
          You've got <br />
          {todos.length} tasks today 🗒️
        </h1>
      </div>
      <div className="date__container">
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};
