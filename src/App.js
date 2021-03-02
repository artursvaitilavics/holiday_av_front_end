import "./App.css";
import Employees from "./components/Employees.js";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div className="App">
      <p>App working fine</p>
      <Employees title="EMPLOYEES TITLE" />

      <AddEmployee />
    </div>
  );
}

export default App;
