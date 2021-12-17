import "./App.css";
import { ConnectButton } from "./components/ConnectButton";
import Indx from "./pages/Indx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConnectButton /> <Indx />
      </header>
    </div>
  );
}

export default App;
