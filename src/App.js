import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import OurServices from './pages/ourservices';
import Contact from './pages/contact';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/ourservices' element={<OurServices />} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    </Router>
);
}
  
export default App;