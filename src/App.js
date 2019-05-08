import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import MiddleContainer from './components/MiddleContainer';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Welcome/>
    <MiddleContainer/>
    <Services/>
    <Testimonials/>
    <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
