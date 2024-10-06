import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./components/home";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
