import { useState, useEffect } from "react";
import Todo from "./Todo";
import Styles from "./todolist.module.css";

// Card Component
const TodoList = () => {
  const classes = Styles;

  // States for storing todos and input values
  const [inputValue, setinputValue] = useState("");
  const [todos, settodos] = useState([]);

  // Getting local Storge todos and setting it to todos state on first load
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");

    if (localTodos) {
      settodos(JSON.parse(localTodos));
    }
  }, []);

  // Saving Data to Local Storage on every time the todos state changes using the useEffect() hook
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function for adding todos
  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      settodos((prev) => [
        { title: inputValue, completed: false, id: new Date().getTime() },
        ...prev,
      ]);
    }
    setinputValue("");
  };

  // Function For deleting todos
  const handleDelete = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Function for adding completed:true in todo state on button click
  const handleComplete = (id) => {
    settodos((prev) =>
      prev.filter((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  return (
    <div className={classes.card}>
      <div className={classes.cardheader}>
        <h1 className={classes.cardtitle}>React Todo List</h1>
      </div>
      <div className={classes.cardbody}>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ))}
      </div>
      <div className={classes.cardfooter}>
        <form onSubmit={handleAdd}>
          <input
            className={classes.input}
            type="text"
            placeholder="Add Todos"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          />
          <button className={classes.btn} type="submit">
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
