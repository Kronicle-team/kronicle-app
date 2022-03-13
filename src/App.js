import './App.module.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {allPages} from "./Pages";

function App() {
  const pages = allPages.all;
  return (
      <Router>
        <Routes>
          {pages.map((page, key) => (
              <Route key={key} path={page.link} element={page.component} />
          ))}
        </Routes>
      </Router>
  );
}

export default App;
