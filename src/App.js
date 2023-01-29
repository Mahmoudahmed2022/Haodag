import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Hall from "./components/Hall";
import Home1 from "./components/Home1";
import Login from "./components/Login";
import WeddingPlanners from "./components/WeddingPlanners";
import Registration from "./components/Registration";
import NavbarWithSideBar from "./components/NavbarWithSideBar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavbarWithSideBar />
      <Routes>
        <Route path="home" element={<Home1 />} />
        <Route path="hall/:hallId" element={<Hall />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="search" element={<Search />} />
        <Route path="WeddingPlanners" element={<WeddingPlanners />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
