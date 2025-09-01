import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero.jsx";
import SimulationComparisons from "./Pages/SimulationComparisons/SimulationComparisons.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/simulation-runs" element={<SimulationRuns />} /> */}
        <Route
          path="/simulation-comparisons"
          element={<SimulationComparisons />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
