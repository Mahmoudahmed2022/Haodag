import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Main Pages/Search";
import Hall from "./components/Hall";
import Home1 from "./components/Main Pages/Home1";
import Login from "./components/Main Pages/Login";
import WeddingPlanners from "./components/Main Pages/WeddingPlanners";
import Registration from "./components/Main Pages/Registration";
import NavbarWithSideBar from "./components/Main Pages/NavbarWithSideBar";
import TermsOfUse from "./components/Main Pages/TermsOfUse";
import HallProfile from "./components/Secondary Pages/Hall/HallProfile";
// import Modal from "./components/Modal ";
import Footer from "./components/Secondary Pages/Footer";
import Modal from "./components/Secondary Pages/Modals/Modal";
import PlanDetails from "./components/Secondary Pages/Plan/PlanDetails";
import Dashboard from "./components/Main Pages/Dashboard";
import HeaderDataProfile from "./components/Secondary Pages/HeaderDataProfile";
import HallForm from "./components/Secondary Pages/Hall/HallForm";
import GreatePackages from "./components/Main Pages/GreatePackages";
import AddPackage from "./components/Secondary Pages/Hall/AddPackage";
import Reservations from "./components/Secondary Pages/Reservations";
function App() {
  return (
    <div className="App">
      <div className="ParentDivForAll">
        <NavbarWithSideBar />
        {/*       <HallProfile/> */}
        <Routes>
          <Route path="/AdminDashboard" element={<Dashboard />} />
          <Route path="/hallForm" element={<HallForm />} />
          <Route path="/greatepackages" element={<GreatePackages />} />
          <Route path="/addpackage" element={<AddPackage />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/hallDetails/:hallId" element={<HallProfile />} />
          <Route path="/" element={<Home1 />} />
          <Route path="/hall/:hallId" element={<Hall />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/search" element={<Search />} />
          <Route path="/WeddingPlanners" element={<WeddingPlanners />} />
          {/* <Route
            path="/planner_Profile/:plannerId"
            element={<WeddingPlannerProfile />}
          /> */}
          <Route path="/Plandetails/:plannerId" element={<PlanDetails />} />
          <Route path="/test/:param/:id" element={<HeaderDataProfile />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/Reservations" element={<Reservations />} />

          {/* <Route path="/ownerprofile" element={<HallOwnerProfile />} /> 
          {/* <Route path="/plannerprofile" element={<WeddingPlannerProfile />} /> */}
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
