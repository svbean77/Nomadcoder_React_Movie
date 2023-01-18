import Button from "./Button.js";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Hello"} />
    </div>
  );
}

export default App;
