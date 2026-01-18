import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './layouts/ScrollToTop';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Branding from './pages/Branding';
import WebDesign from './pages/WebDesign';
import Video from './pages/Video';
import Event from './pages/Event';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/web" element={<WebDesign />} />
          <Route path="/services/video" element={<Video />} />
          <Route path="/services/event" element={<Event />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
