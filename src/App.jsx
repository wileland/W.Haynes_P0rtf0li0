import React, { useEffect, Suspense, lazy, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Lazy load the pages
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  // State for error recovery
  const [errorKey, setErrorKey] = useState(0);

  // Function to reset error boundary
  const resetErrorBoundary = () => {
    setErrorKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.orientation === 90 || window.orientation === -90) {
        document.body.classList.add("landscape");
      } else {
        document.body.classList.remove("landscape");
      }
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    handleOrientationChange();

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        {/* Key prop will force remount if errorKey changes */}
        <ErrorBoundary key={errorKey} onReset={resetErrorBoundary}>
          <Suspense fallback={<div>Loading...</div>}>
            <main>
              <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                {/* Fallback route for not found */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
