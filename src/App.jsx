import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Form from "./Form";
import DisplayData from "./DisplayData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/view" element={<DisplayData />} />
      </Routes>
    </Router>
  );
}

export default App;
