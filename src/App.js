import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import NavbarWithSideBar from "./components/NavbarWithSideBar";
// import WeddingPlanners from "./components/WeddingPlanners";
import Footer from "./components/Footer";
// import Search from "./components/Search";
import Home1 from "./components/Home1";
import Search from "./components/Search";
import WeddingPlanners from "./components/WeddingPlanners";
// import Search from "./components/Search";

// import Registration from "./components/Registration";

// import Search from "./components/Search";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <WeddingPlanners />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
=======
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
>>>>>>> f910d5fd928ced329f92ca88895d0cae38116126
  );
}

export default App;
