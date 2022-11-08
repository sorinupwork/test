import MainNavbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Echipe from "./components/Echipe/Echipe";
import Jucatori from "./components/Jucatori/Jucatori";
import CreateTeam from "./components/Echipe/CreateTeam";
import CreatePlayer from "./components/Jucatori/CreatePlayer";
import EditTeam from "./components/Echipe/EditTeam";
import EditPlayer from "./components/Jucatori/EditPlayer";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainNavbar />} />
      <Route exact path="/echipe" element={<Echipe />} />
      <Route exact path="/echipe/create" element={<CreateTeam />} />
      <Route exact path="/echipe/update" element={<EditTeam />} />
      <Route exact path="/jucatori" element={<Jucatori />} />
      <Route exact path="/jucatori/create" element={<CreatePlayer />} />
      <Route exact path="/jucatori/update" element={<EditPlayer />} />
    </Routes>
  );
}

export default App;
