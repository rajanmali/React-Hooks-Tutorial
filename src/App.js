import Footer from "./components/Footer/Footer";
import DataFetching from "./components/useEffect/DataFetching";

import "./App.css";

function App() {
  return (
    <div className="App">
      <DataFetching />
      <Footer />
    </div>
  );
}

export default App;
