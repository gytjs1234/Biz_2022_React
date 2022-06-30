import "./App.css";
import Write from "./components/Write";
import BuckitMain from "../../react-buckit/src/components/BuckitMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BuckitMain />
      </header>
      <Write />
    </div>
  );
}

export default App;
