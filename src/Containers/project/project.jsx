import React from "react";
import "./styles.scss";
import future from "./assets/futurescorelive.jpeg";
import tuneLive from "./assets/tuneLive.jpg";
import movieStore from "./assets/movieStore.jpeg";
import dronoticz from "./assets/Dronoticz.png";
import { Animate } from "react-simple-animate";

const projectData = [
  {
    title: "FutureScore website",
    summary: "Available on mobile devices; larger screens still in progress.",
    image: future,
    liveDemo: "https://future-score-bqpm.vercel.app/",
  },
  {
    title: "TuneLive",
    summary: "Still in progress",
    image: tuneLive,
    liveDemo: "https://tune-live.vercel.app/",
  },
  {
    title: "Movie Store",
    summary:
      "Entertainment platform featuring live events remotely and Spotify API integration for music.",
    image: movieStore,
    liveDemo: "https://entertainment-63aa.vercel.app/",
  },
  {
    title: "Dronoticz",
    summary: "My first React project for Dronoticz.",
    image: dronoticz,
    liveDemo: "https://react-portfolio-projct-2.vercel.app/",
  },
];

const Project = () => {
  return (
    <section className="project-section" id="projects">
      <h2 className="project-section__title">My Projects</h2>
      <div className="project-section__cards">
        {projectData.map((project, index) => (
          <Animate
            key={index}
            play
            duration={0.8}
            delay={index * 0.3}
            start={{ opacity: 0, transform: "translateY(40px)" }}
            end={{ opacity: 1, transform: "translateY(0)" }}
          >
            <div className="project-card" tabIndex={0}>
              <div className="project-card__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                />
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </section>
  );
};

export default Project;
