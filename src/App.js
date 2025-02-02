import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimulationRuns from "./Pages/Simulation-Runs/SimulationRuns";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/simulation-runs" element={<SimulationRuns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
