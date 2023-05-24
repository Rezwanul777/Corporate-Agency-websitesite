
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './Components/About';
import Works from './Components/Works';
import Services from './Components/Services';
import Team from './Components/Team';
import Contact from './pages/contact/Contact';
import Verification from './Components/Verification';
import Header from './Components/Header';
import Footer from './pages/common/Footer';

// animation part import
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CardDetails from './Components/CardDetails';


function App() {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <>
    <div id='header'>
      <Header/>   
      </div>
     <Routes>
  <Route path="/" element={<Home />}/>

  <Route path="about" element={<About/>} />
  <Route path="Works" element={<Works/>} />
  <Route path="services" element={<Services/>} />
  <Route path="/details/:id" element={<CardDetails/>} />
  <Route path="team" element={<Team/>} />
  <Route path="contact" element={<Contact/>} />
  <Route path="verification" element={<Verification/>} />
</Routes>
    <Footer/>
    </>
  );
}

export default App;
