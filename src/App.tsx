import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { NewPatient } from "./pages/NewPatient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo-pacitene" element={<NewPatient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
