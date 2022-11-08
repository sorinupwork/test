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
      <Route exact path="websorin.netlify.app/echipe" element={<Echipe />} />
      <Route
        exact
        path="websorin.netlify.app/echipe/create"
        element={<CreateTeam />}
      />
      <Route
        exact
        path="websorin.netlify.app/echipe/update"
        element={<EditTeam />}
      />
      <Route
        exact
        path="websorin.netlify.app/jucatori"
        element={<Jucatori />}
      />
      <Route
        exact
        path="websorin.netlify.app/jucatori/create"
        element={<CreatePlayer />}
      />
      <Route
        exact
        path="websorin.netlify.app/jucatori/update"
        element={<EditPlayer />}
      />
    </Routes>
  );
}

export default App;
