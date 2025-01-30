import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import GameWaldo from "./components/GameWaldo";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="general-content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game-waldo" element={<GameWaldo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
