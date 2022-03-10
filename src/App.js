import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="para">sss</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HomePage />
        <a href="/">Han Sooyoung</a>
      </header>
    </div>
  );
}

export default App;
