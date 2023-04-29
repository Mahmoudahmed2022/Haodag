import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Hall from "./components/Hall";
import Home1 from "./components/Home1";
import Login from "./components/Login";
import WeddingPlanners from "./components/WeddingPlanners";
import Registration from "./components/Registration";
import NavbarWithSideBar from "./components/NavbarWithSideBar";
import TermsOfUse from "./components/TermsOfUse";
import HallProfile from "./components/HallProfile";
// import Modal from "./components/Modal ";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import PlanDetails from "./components/PlanDetails";
import Dashboard from "./components/Dashboard";
import HeaderDataProfile from "./components/HeaderDataProfile";
import HallForm from "./components/HallForm";

function App() {
  return (
    <div className="App">
      <div className="ParentDivForAll">
        <NavbarWithSideBar />
        {/*       <HallProfile/> */}
        <Routes>
        <Route path="/AdminDashboard" element={<Dashboard/>} />
        <Route path="/hallForm" element={<HallForm/>}/>

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
          <Route path="/test/:param/:id" element={<HeaderDataProfile/>} />
          <Route path="/termsofuse" element={<TermsOfUse />} />{" "}
          {/* <Route path="/ownerprofile" element={<HallOwnerProfile />} /> */}
          <Route path="/Plandetails/:plannerId" element={<PlanDetails />} />
          {/* <Route path="/plannerprofile" element={<WeddingPlannerProfile />} /> */}
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
