import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Login2 from "./components/Login2";
import Search from "./components/Search";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Search />
        {/* <Registration /> */}
        {/* <Navbar />
                <Navbar />
        <Sidebar />
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
