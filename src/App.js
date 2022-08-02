import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import CurriculumVitae from './pages/CurriculumVitae';
import Galerie from './pages/Galerie';
import Jams from './pages/Jams';

// import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import MentionsLegales from './pages/MentionsLegales';

import { AnimatePresence } from 'framer-motion';
import { Earth } from './components/Earth';


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Curriculum-Vitae" element={<CurriculumVitae />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Galerie" element={<Galerie />} />
          <Route path="/Jams" element={<Jams />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Mentions-Legales" element={<MentionsLegales />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
        
    </div>
  );
}

export default App;


