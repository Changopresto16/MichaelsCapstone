import React, {useState} from 'react'
import Navbar from "./components/Navbar";
import Moods from "./pages/Moods";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {

  const getUserFromLocalStorage = () => {
    const foundUser = localStorage.getItem('user')
    if (foundUser) {
      return JSON.parse(foundUser)
    }
    return {}
  };


  const [user, setUser] = useState(getUserFromLocalStorage())
  



  const logMeIn = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }
  const logMeOut = () => {
    setUser({})
    localStorage.removeItem('user')
  }



  return (
    <>
    <Navbar user={user} logMeOut={logMeOut} />
    <div className="container"> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path='/login' element={<Login logMeIn={logMeIn} />} />
      <Route path="/Moods" element={<Moods />} />
    </Routes>
    </div>
  
    </>

  );
}

export default App;
