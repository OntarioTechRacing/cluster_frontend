import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import {Route, Routes, BrowserRouter} from "react-router-dom"
import ForceResults from "./pages/PostProcessing/ForceResults.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Hero />}></Route>
          <Route path = "forceResults" element={<ForceResults />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
