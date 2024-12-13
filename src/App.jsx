import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; // Footer'ı import et
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 120px)" }}> {/* Sayfa içeriği ile footer arasındaki boşluğu ayarlıyoruz */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
      <Footer /> {/* Footer'ı sayfanın altında ekliyoruz */}
    </Router>
  );
};

export default App;