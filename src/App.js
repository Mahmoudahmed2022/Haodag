import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
import Search from "./components/Search";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Search />
        {/*  <Login /> */}
        {/* <Navbar />
                  
          <Registration />
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
