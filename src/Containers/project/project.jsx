import React from 'react';
import './styles.scss';
import future from "./assets/futurescorelive.jpeg";
import tuneLive from "./assets/tuneLive.jpg";
import movieStore from "./assets/movieStore.jpeg";
import dronoticz from "./assets/Dronoticz.png";

const projectData = [
  {
    title: "FutureScore website",
    summary: "available on mobile devices , larger screens still in progress..",
    image: future,
    liveDemo: "https://future-score-bqpm.vercel.app/",
  },
  {
    title: "TuneLive",
    summary: "still in progress",
    image: tuneLive,
    liveDemo: "https://tune-live.vercel.app/",
  },
  {
    title: "Movie Store",
    summary: "the plan was to build entertainment platform where you can attend live event remotely and there is a feature for music where it uses spotify api",
    image: movieStore,
    liveDemo: "https://entertainment-63aa.vercel.app/",
  },
  {
    title: "Dronoticz",
    summary: "my first react project for dronoticz",
    image: dronoticz,
    liveDemo: "https://react-portfolio-projct-2.vercel.app/",
  },
];

const Project = () => {
  return (
    <section className="project-section">
      <h2 className="project-section__title">My Projects</h2>
      <div className="project-section__cards">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-card__image" />
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__summary">{project.summary}</p>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-card__link">Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
