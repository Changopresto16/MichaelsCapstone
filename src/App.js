import React, { useEffect } from 'react'
import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom"


function App() {


  return (
    <>
    <Navbar />
    <div className="container"> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path="/About" element={<About />} />
    </Routes>
    </div>
  
    </>

  );
}

export default App;
