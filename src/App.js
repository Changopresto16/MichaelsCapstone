import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
    <Navbar />
    <div className="container"> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/About" element={<About />} />
    </Routes>
    </div>
  
    </>

  );
}

export default App;
