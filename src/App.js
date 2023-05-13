
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

function App() {
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
  <Route path="team" element={<Team/>} />
  <Route path="contact" element={<Contact/>} />
  <Route path="verification" element={<Verification/>} />
</Routes>
    
    </>
  );
}

export default App;
