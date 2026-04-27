import "./App.css";
import Card from "./Card";
const randNum = () => Math.floor(Math.random() * 100) + 1;
function App() {
  return (
    <div>
      <h1>Task: Add 3 card elements</h1>
      <Card value={randNum()} />
      <Card value={randNum()} />
      <Card value={randNum()} />
    </div>
  );
}

export default App;
