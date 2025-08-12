import "./App.css";
import Base from "./Base";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Analytics />
      <SpeedInsights />
      <Routes>
        <Route exact path="/" element={<Base />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
