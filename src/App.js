import Sidebar from "./components/Sidebar.js";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
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
