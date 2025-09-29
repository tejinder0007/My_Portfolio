// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Welcome from './Components/Welcome';
import Navbar from './Components/Navbar'; 
import Footer from './Components/Footer'; 

function App() {
  return (
    <Router>
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;