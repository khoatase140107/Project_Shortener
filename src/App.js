import {
  adjacentElementsProduct,
  alternatingSums,
} from "./problemSolving/index";
import "./App.css";
import LinkShortenerComponent from "./components/LinkShortenerComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        {adjacentElementsProduct([10, 3, -5, -2, -20])}
        {alternatingSums([60, 40, 55, 75, 64])}
        <LinkShortenerComponent />
      </div>
    </Router>
  );
}

export default App;
