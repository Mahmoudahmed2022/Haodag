import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import NavbarWithSideBar from "./components/NavbarWithSideBar";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Login/>
        {/* <Registration /> */}
        {/* <Navbar />
          
          <Login2
          
      */}
        {/* <Routes>
         
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
