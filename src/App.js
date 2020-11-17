import "./App.css";
// import ClassCounter from "./components/useState/ClassCounter";
import UseStateArray from "./components/useState/UseStateArray";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      <UseStateArray />
      <footer style={{ position: "fixed", bottom: "0" }}>
        <p>
          <a
            href="https://github.com/rajanmali"
            target="_blank"
            rel="noreferrer"
            className="App-link"
          >
            @notrajanmali
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
