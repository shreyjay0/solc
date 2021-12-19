import { useEffect } from "react";
import "./App.css";
import { ConnectButton } from "./components/ConnectButton";
import Indx from "./pages/Indx";
import { WalletFound } from "./utils/wallet";
function App() {
  useEffect(() => {
    const onLoad = async () => {
      await WalletFound();
    };
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);
  return (
    <div className="App" style={{ position: "relative", top: -60, zIndex: 0 }}>
      <header className="App-header">
        <Indx />
      </header>
    </div>
  );
}

export default App;
