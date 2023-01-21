import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Registration from "./components/Registration";
import Login2 from "./components/Login2";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*<Sidebar /> */}
        <Login2 />
        {/* <Navbar />
          
          <Registration
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
