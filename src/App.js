import logo from "./logo.svg";
import "./App.css";
import Test from './Components/test'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Jayesh Harsh</h1>
        <p>
          Edit <code>src/App.js</code> and reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test/>
      </header>
    </div>
  );
}

export default App;
