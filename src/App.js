import { BrowserRouter, Routes, Route } from "react-router-dom";

import Search from "./components/Search";
import Footer from "./components/Footer";
// import Registration from "./components/Registration";

// import Search from "./components/Search";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Search/>
        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;
