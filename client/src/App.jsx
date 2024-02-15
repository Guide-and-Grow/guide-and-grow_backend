import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Developement, FAQ, Home, Login, Signup } from "./routes/routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/developement" element={<Developement />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
