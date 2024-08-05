import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Containers/home/index.jsx';
import Resume from './Containers/resume/index.jsx';
import About from './Containers/about/index.jsx';
import Skills from './Containers/skills/index.jsx';
import Portfolio from './Containers/portfolio/index.jsx';
import NavBar from './Components/navBar/index.jsx';
import Contacts from './Containers/contacts/index.jsx';
// import particles from './utils.js/particles.js';
// import ParticlesBackground from  './Components/config/particlesBackground.jsx';
import './App.scss';

function App() {
  const handleInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();
  console.log(location);

  const renderParticlesJsInHomePage = location.pathname === '/';

  return (
    <div className='App'>
      {/* <ParticlesBackground/>
      {renderParticlesJsInHomePage && (
        <Particles id="tsparticles" options={particles} init={handleInit} />
      )} */}
      <NavBar />
      <div className='App__main__page__container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
   </div>
      
    </div>
  );
}

export default App;
