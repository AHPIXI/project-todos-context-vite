import { useState } from "react";
import "./TodoForm.css";

export const TodoForm = () => {
  //     const { todo, addTodo } = useTodo()
  // const [newTodo, setNewTodo] = useState({
  //     todotext: ""
  // })

  // const handleChange = event => {
  //     setNewTodo({...newTodo,[event.target.name]: event.target.value})
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    //   addTodo(newTodo)
    //   setNewTodo(({ todotext: "" }))
    console.log(event);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Create new todo</label>
        <input
          type="text"
          name="todotext"
          placeholder="Add a new todo here..."
        />
        <button>Add task</button>
      </form>
    </>
  );
};

// value={newTodo.todotext}
// onChange={handleChange}
