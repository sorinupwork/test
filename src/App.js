import MainNavbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Echipe from "./components/Echipe/Echipe";
import Jucatori from "./components/Jucatori/Jucatori";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainNavbar />} />
      <Route path="/echipe" element={<Echipe />} />
      <Route path="/jucatori" element={<Jucatori />} />
    </Routes>
  );
}

export default App;
