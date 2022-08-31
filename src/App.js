import React, { useEffect } from 'react'
import Navbar from "./components/Navbar";
import Moods from "./pages/Moods";
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
      <Route path="/Moods" element={<Moods />} />
    </Routes>
    </div>
  
    </>

  );
}

export default App;
