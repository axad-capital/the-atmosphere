import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComp from './components/NavComp/NavComp';
import HomePage from './pages/HomePage';
import Department from './pages/Department'
import About from './pages/AboutUs'
import Gallery from './pages/Gallery'
import Agency from './pages/Agency'
import Event from './pages/Event'
import Tickets from './pages/Tickets'
import Apply from './pages/Apply'
import FooterComp from './components/FooterComp/FooterComp';

function App() {
  return (
    <div className="App">
       <Router>
         <NavComp />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/department' element={<Department />} />
          <Route exact path='/about-us' element={<About />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/agency' element={<Agency />} />
          <Route exact path='/event' element={<Event />} />
          <Route exact path='/tickets' element={<Tickets />} />
          <Route exact path='/apply' element={<Apply />} />
        </Routes>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;
