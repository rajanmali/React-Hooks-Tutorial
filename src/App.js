import "./App.css";
import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
    </div>
  );
}

export default App;
