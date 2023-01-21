import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration.js";
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

  );
}

export default App;
