import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Nav.css";
import "./styles/Services.css";
import "./styles/Footer.css";
import "./styles/Theme.css";


export default function App() {
  return (
    <Router>
    <Header />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
    <Footer />
    </Router>
  );
}