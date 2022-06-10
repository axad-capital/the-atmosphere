import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComp from './components/NavComp/NavComp';
import HomePage from './pages/HomePage';
import Entertainment from './pages/Entertainment'
import About from './pages/AboutUs'
import Gallery from './pages/Gallery'
import GalleryImages from './components/GalleryComp/GalleryImages';
import Agency from './pages/Agency'
import Event from './pages/Event'
// import Tickets from './pages/Tickets'
import Apply from './pages/Apply'
import FooterComp from './components/FooterComp/FooterComp';
import CartComp from './components/CartComp/CartComp';

function App() {
  return (
    <div className="App">
       <Router>
         <NavComp />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/entertainment' element={<Entertainment />} />
          <Route exact path='/about-us' element={<About />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/gallery/images' element={<GalleryImages />} />
          <Route exact path='/agency' element={<Agency />} />
          <Route exact path='/event' element={<Event />} />
          {/* <Route exact path='/tickets' element={<Tickets />} /> */}
          <Route exact path='/apply' element={<Apply />} />
          <Route exact path='/cart' element={<CartComp />} />

        </Routes>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;
