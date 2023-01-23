import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarWithSideBar from "./components/NavbarWithSideBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarWithSideBar/>
        {/* <Registration /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
