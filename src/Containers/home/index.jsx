import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="home">
      <div className="home__text__wrapper">
        <h1>
          Hi, I am Maropene Makalapetlo.
          <br />
          Software Developer
        </h1>
      </div>
      <Animate
        play
        duration={0.5}
        delay={1.5}
        start={{ 
          transform: "translateY(550px)",
        }}
        end={{ 
          transform: "translateX(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
