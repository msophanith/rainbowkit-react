import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <code>Hello World!</code>
        <br />
        <ConnectButton />
      </header>
    </div>
  );
}

export default App;
