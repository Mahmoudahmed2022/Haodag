import Sidebar from "./components/Sidebar.js"

import { Routes , Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Navbar/>
      <Sidebar/>
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
