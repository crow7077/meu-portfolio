import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/portfolio/Portfolio";
import About from "./Pages/About/About"; 
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sobre-mim" element={<About />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;