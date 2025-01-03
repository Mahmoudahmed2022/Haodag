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
import Bookings from "./components/Secondary Pages/Bookings";
import PlansRequests from "./components/Secondary Pages/PlansRequests";
import HallsRequests from "./components/Secondary Pages/Hall/HallsRequests";
import ModalEditClientProfile from "./components/Secondary Pages/Modals/ModalEditClientProfile";
import ModalAddplan from "./components/Secondary Pages/Modals/ModalAddplan";
import EditHall from "./components/Secondary Pages/Hall/EditHall";
import PlansBookings from "./components/Secondary Pages/PlansBookings";
import HallsBookings from "./components/Secondary Pages/HallsBookings";
import ModalForAskToBook from "./components/Secondary Pages/Modals/ModalForAskToBook";
import AskToBookPlan from "./components/Secondary Pages/AskToBooKPlan";
import SidebarforAdminDashboard from "./components/Main Pages/SidebarforAdminDashboard.js";
import AddAdmin from "./components/Secondary Pages/AddAdmin";
import EditPackage from "./components/Secondary Pages/Hall/EditPackage";
import { MyProvider } from "./components/Main Pages/Redux";
import Home from "./components/Main Pages/Home1";
import HomeForTranslate from "./components/Secondary Pages/Translation/HomeForTranslate";
import AddService from "./components/Secondary Pages/AddService";
import ProfileForAll from "./components/Secondary Pages/ProfileForAll";
import UpdateService from "./components/Secondary Pages/UpdateService";
import AskToBookService from "./components/Secondary Pages/AskToBookService";
import ServicesRequests from "./components/Secondary Pages/ServicesRequests";
import AllPlans from "./components/Secondary Pages/AllPlans";
import ServicesBooking from "./components/Secondary Pages/ServicesBooking";

function App() {
  return (
    <MyProvider>
      <div className="App">
        {/* <div className="ParentDivForAll"> */}
          <Routes>
            <Route path="/AdminDashboard" element={<Dashboard />} />
            <Route path="/plans" element={<AllPlans />} />

            <Route path="/hallForm" element={<HallForm />} />
            <Route path="/hallsrequests" element={<HallsRequests />} />
            <Route path="/greatepackages" element={<GreatePackages />} />
            <Route path="/addpackage" element={<AddPackage />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/hallDetails/:hallId" element={<HallProfile />} />
            <Route path="/" element={<Home1 />} />
            <Route path="/translation" element={<HomeForTranslate />} />
            <Route path="/addservice" element={<AddService />} />
            <Route path="/hall/:hallId" element={<Hall />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/search" element={<Search />} />
            <Route path="/WeddingPlanners" element={<WeddingPlanners />} />
            <Route path="/PlansBookings" element={<PlansBookings />} />
            <Route path="/HallsBookings" element={<HallsBookings />} />
            <Route path="/ServicesBooking" element={<ServicesBooking />} />

            <Route path="/Plandetails/:plannerId" element={<PlanDetails />} />
            <Route path="/:param/:id" element={<HeaderDataProfile />} />
            <Route path="/user/:name/:id" element={<ProfileForAll />} />

            <Route path="/termsofuse" element={<TermsOfUse />} />
            <Route path="/Bookings" element={<Bookings />} />
            <Route path="/addadmin" element={<AddAdmin />} />
            <Route path="/ServicesRequests" element={<ServicesRequests />} />

            <Route path="/PlansRequests" element={<PlansRequests />} />
            <Route
              path="/editProfile/:id"
              element={<ModalEditClientProfile />}
            />
            <Route path="/addplan" element={<ModalAddplan />} />
            <Route path="/BookHall/:id" element={<ModalForAskToBook />} />
            <Route path="/BookPlan/:id" element={<AskToBookPlan />} />
            <Route path="/BookService/:id" element={<AskToBookService />} />
            <Route path="/EditPackage/:id" element={<EditPackage />} />
            <Route path="/editHall/:id" element={<EditHall />} />
            <Route path="/updateService/:id" element={<UpdateService />} />
          </Routes>

          <Footer />
        {/* </div> */}
      </div>
    </MyProvider>
  );
}

export default App;
