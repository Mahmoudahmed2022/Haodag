import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration.js";
import Login from "./components/Login";
import Home from "./components/Home.js";
import Login2 from "./components/Login2";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar />
        <Sidebar /> */}
        <Login2 />

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
