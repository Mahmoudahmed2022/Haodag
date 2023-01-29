import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  );
}

export default App;
