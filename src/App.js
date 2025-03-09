import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimulationRuns from "./Pages/Simulation-Runs/SimulationRuns";
import Hero from "./components/Hero/Hero.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/simulation-runs" element={<SimulationRuns />} />
        <Route path="/home" element={<Hero />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
