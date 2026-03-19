import { Routes, Route, Link } from "react-router-dom";
import Group1 from "./pages/g1/Group1";
import Group2 from "./pages/g2/Group2";
import Group3 from "./pages/g3/Group3";
import Group4 from "./pages/g4/Group4";
import "./App.css";

function App() {
  return (
    <div className="layout">

      <div className="sidebar">
        <h2>Grupy</h2>

        <Link to="/group1" className="groupBtn">Grupa 1</Link>
        <Link to="/group2" className="groupBtn">Grupa 2</Link>
        <Link to="/group3" className="groupBtn">Grupa 3</Link>
        <Link to="/group4" className="groupBtn">Grupa 4</Link>
      </div>

      <div className="content">
        <Routes>
          <Route path="/group1" element={<Group1 />} />
          <Route path="/group2" element={<Group2 />} />
          <Route path="/group3" element={<Group3 />} />
          <Route path="/group4" element={<Group4 />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;