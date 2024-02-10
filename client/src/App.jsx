import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Developement, FAQ, Home, Login, Signup } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/developement" element={<Developement />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
