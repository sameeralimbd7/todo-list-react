import Styles from "./app.module.css";
import Card from "./components/Card";

const App = () => {
  const classes = Styles;
  return (
    <div className={classes.main}>
      <Card />
    </div>
  );
};

export default App;
