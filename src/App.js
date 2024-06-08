import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddEditUser from "./Pages/AddEditUser/AddEditUser";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEditUser />} />
          <Route path="/update/:id" element={<AddEditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
