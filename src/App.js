import React, { useEffect , useState } from 'react'
import Navbar from "./components/Navbar";
import Moods from "./pages/Moods";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Moodcard from './components/Moodcard';
import { Route, Routes } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'



function App() {
  const [show, setShow] = useState(false);

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
