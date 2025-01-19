import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/services" element={<Layout><Services/></Layout>} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;