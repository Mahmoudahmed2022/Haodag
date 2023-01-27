import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarWithSideBar from "./components/NavbarWithSideBar";
import WeddingPlanners from "./components/WeddingPlanners";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Registration from "./components/Registration";

// import Search from "./components/Search";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Search/>
        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;
