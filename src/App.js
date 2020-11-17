import Footer from "./components/Footer/Footer";
import IntervalClassCounter from "./components/useEffect/IntervalClassCounter";
import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";

import "./App.css";

function App() {
  return (
    <div className="App">
      <IntervalClassCounter />
      <IntervalHookCounter />
      <Footer />
    </div>
  );
}

export default App;
