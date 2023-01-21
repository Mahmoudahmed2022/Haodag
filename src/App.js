import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Registration />
      {/* <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Home" element={<Home />} />
  </Routes>*/}
    </div>
  );
}

export default App;
