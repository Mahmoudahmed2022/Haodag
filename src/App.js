import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import Login from "./components/Login";
import Home from "./components/Home.js";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar />
        <Sidebar /> */}
        <Login />
        {/* <Navbar /> */}
        {/* <Routes>
         
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes> */}
      </div>
    </BrowserRouter>
=======
import Registration from "./components/Registration.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Registration />
      {/* <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Home" element={<Home />} />
  </Routes>*/}
    </div>
>>>>>>> b878df462feb0587b680fa3db89149268a4e34b7
  );
}

export default App;
