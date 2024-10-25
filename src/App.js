import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import SecondTestfile from "./components/SecondTestfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testfile" element={<SecondTestfile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
