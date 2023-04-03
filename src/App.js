import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Hall from "./components/Hall";
import Home1 from "./components/Home1";
import Login from "./components/Login";
import WeddingPlanners from "./components/WeddingPlanners";
import Registration from "./components/Registration";
import NavbarWithSideBar from "./components/NavbarWithSideBar";
import TermsOfUse from "./components/TermsOfUse";
import ClientProfile from "./components/ClientProfile";
import HallProfile from "./components/HallProfile";
// import Modal from "./components/Modal ";
import Footer from "./components/Footer";
import PlannerProfile from "./components/PlannerProfile";
import HallForm from "./components/HallForm";
import HallOwnerProfile from "./components/HallOwnerProfile";
import Modal from "./components/Modal";
import PlanDetails from "./components/PlanDetails";
import WeddingPlannerProfile from "./components/WeddingPlannerProfile ";

function App() {
  return (
    <div className="App">
      <div className="ParentDivForAll">
      <NavbarWithSideBar />
      {/*       <HallProfile/> */}
      <Routes>
        <Route path="hallForm" element={<HallForm />} />
        <Route path="modal" element={<Modal />} />
        <Route path="hallDetails" element={<HallProfile />} />
        <Route path="home" element={<Home1 />} />
        <Route path="hall/:hallId" element={<Hall />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<ClientProfile />} />
        <Route path="registration" element={<Registration />} />
        <Route path="search" element={<Search />} />
        <Route path="WeddingPlanners" element={<WeddingPlanners />} />
        <Route path="Planner_Profile/:plannerId" element={<PlannerProfile />} />
        <Route path="termsofuse" element={<TermsOfUse />} />{" "}
        <Route path="ownerprofile" element={<HallOwnerProfile />} />
        <Route path="Planner_Profile/plan:plannerId" element={<PlanDetails />} />
        <Route path="planner" element={<WeddingPlannerProfile/>} />


      </Routes>

      <Footer />
      </div>
    </div>
  );
}

export default App;
