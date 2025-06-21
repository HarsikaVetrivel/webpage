import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FundamentalsPlanet from "./components/FundamentalsPlanet";
import ArchitecturePlanet from "./components/ArchitecturePlanet";
import AuthPlanet from "./components/AuthPlanet";
import DeployPlanet from "./components/DeployPlanet";
import QuizPlanet from "./components/QuizPlanet";
import "./styles/Global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FundamentalsPlanet />} />
        <Route path="/architecture" element={<ArchitecturePlanet />} />
        <Route path="/auth" element={<AuthPlanet />} />
        <Route path="/deploy" element={<DeployPlanet />} />
        <Route path="/quiz" element={<QuizPlanet />} />
      </Routes>
    </Router>
  );
}

export default App;
