import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Containers/home/index.jsx';
import About from './Containers/about/index.jsx';
import Skills from './Containers/skills/index.jsx';
import Portfolio from './Containers/portfolio/index.jsx';
import NavBar from './Components/navBar/index.jsx';
import Project from './Containers/project/project.jsx';
import Contacts from './Containers/contacts/index.jsx';
import Footer from './Containers/Footer/Footer.jsx';
import './App.scss';

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className='App'>
      <NavBar />
      <div className='App__main__page__container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      
      </div>
      <Footer />
    </div>
  );
}

export default App;
