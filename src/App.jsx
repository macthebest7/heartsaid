import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <nav className="flex justify-center gap-6 p-4 bg-gray-100 shadow-md">
        <Link to="/" className="text-pink-600 font-semibold">Home</Link>
        <Link to="/plans" className="text-pink-600 font-semibold">Plans</Link>
        <Link to="/contact" className="text-pink-600 font-semibold">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
