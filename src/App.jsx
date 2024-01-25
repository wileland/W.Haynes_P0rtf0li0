import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  useEffect(() => {
    const handleOrientationChange = () => {
      // Check if the device is in landscape orientation
      if (window.orientation === 90 || window.orientation === -90) {
        // Adjust styles for landscape orientation
        document.body.classList.add("landscape");
      } else {
        // Reset styles for portrait orientation
        document.body.classList.remove("landscape");
      }
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    // Call the handler to set the initial orientation
    handleOrientationChange();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
