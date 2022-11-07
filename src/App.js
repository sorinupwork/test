import MainNavbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Echipe from "./components/Echipe/Echipe";
import Jucatori from "./components/Jucatori/Jucatori";
import CreateTeam from "./components/Echipe/CreateTeam";
import CreatePlayer from "./components/Jucatori/CreatePlayer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainNavbar />} />
      <Route path="/echipe" element={<Echipe />} />
      <Route path="/echipe/create" element={<CreateTeam />} />
      <Route path="/jucatori" element={<Jucatori />} />
      <Route path="/jucatori/create" element={<CreatePlayer />} />
    </Routes>
  );
}

export default App;
