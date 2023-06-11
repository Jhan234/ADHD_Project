import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/home";
import ToolList from "./Pages/toolList";
import Navbar from "./Pages/navbar";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tools" element={<ToolList />} />
      </Routes>
    </>
  );
}

export default App;
