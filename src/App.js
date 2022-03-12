import './App.module.css';
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
      <>
      <Header />
        <p className="para">sss</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HomePage />
        </>
  );
}

export default App;
