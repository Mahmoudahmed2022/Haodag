import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Hall from "./components/Hall";
import Home from "./components/Home";
import Login from "./components/Login";
import WeddingPlanners from "./components/WeddingPlanners";
import Registration from "./components/Registration";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="search" element={<Search />} />
        <Route path="WeddingPlanners" element={<WeddingPlanners />} />
      </Routes>
    </div>
  );
}

export default App;
