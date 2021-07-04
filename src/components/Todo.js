import Styles from "./todo.module.css";

const Todo = ({ title, handleDelete, handleComplete, id, completed }) => {
  const classes = Styles;
  return (
    <div className={classes.todo}>
      <h3 className={`${classes.todotitle} ${completed ? classes.line : ``}`}>
        {title}
      </h3>
      <div className="btngroup">
        <button onClick={() => handleComplete(id)} className={classes.btn}>
          <i className={`fas ${completed ? `fa-times` : `fa-check`}`}></i>
        </button>
        <button onClick={() => handleDelete(id)} className={classes.btn}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
