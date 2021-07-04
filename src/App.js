import Styles from "./app.module.css";
import TodoList from "./components/TodoList";

const App = () => {
  const classes = Styles;
  return (
    <div className={classes.main}>
      <TodoList />
    </div>
  );
};

export default App;
