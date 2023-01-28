import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarWithSideBar from "./components/NavbarWithSideBar";
import WeddingPlanners from "./components/WeddingPlanners";
import Footer from "./components/Footer";
import Search from "./components/Search";
// import Search from "./components/Search";

// import Registration from "./components/Registration";

// import Search from "./components/Search";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarWithSideBar />

        <WeddingPlanners />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
