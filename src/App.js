import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimulationRuns from "./Pages/SimulationRuns.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import SimulationComparison from "./Pages/SimulationComparison.jsx";
import LoginPage from "./Pages/LoginPage.jsx";

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
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
