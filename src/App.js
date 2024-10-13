import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery'; // Import the Gallery component
import Footer from './components/Footer/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer /> {/* Ensure Footer is included here */}
      </div>
    </Router>
  );
}

export default App;