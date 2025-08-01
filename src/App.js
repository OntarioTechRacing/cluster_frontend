import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimulationRuns from "./Pages/SimulationRuns.jsx";
import Hero from "./components/Hero/Hero.jsx";
import SimulationComparison from "./Pages/SimulationComparison.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/simulation-runs" element={<SimulationRuns />} />
        <Route
          path="/simulation-comparisons"
          element={<SimulationComparison />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
