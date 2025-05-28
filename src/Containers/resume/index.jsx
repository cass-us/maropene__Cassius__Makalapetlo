import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import PageHeaderContent from '../../Components/pageHeaderContent/index.jsx';
import './styles.scss';

const educationData = [
  {
    institution: "Tshwane University of Technology",
    degree: "Advanced Diploma in Information Technology",
    period: "Feb 2019 - June 2023",
    description: "Focused on software development, databases, and network management."
  },
  {
    institution: "Motlalaohle Secondary School",
    degree: "High School Diploma",
    period: "Jan 2013 - Nov 2018",
    description: "Completed secondary education with distinction in Mathematics and Science."
  },
];

const experienceData = [
  {
    company: "TeamTech Ltd Pty",
    role: "Junior Software Developer",
    period: "July 2024 - Present",
    description: "Working on React.js and SpringBoot projects, integrating APIs, and improving application performance."
  },
  {
    company: "Fraktional.dev",
    role: "Junior QA Tester",
    period: "Jan 2024 - June 2024",
    description: "Executed test cases, reported bugs, and collaborated with developers to enhance software quality."
  },
];

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <Animate play duration={0.8} delay={0.3} start={{ opacity: 0, transform: 'translateY(20px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}>
        <div className="resume__section">
          <h3 className="resume__section-title">Education</h3>
          <ul className="resume__list">
            {educationData.map(({ institution, degree, period, description }, idx) => (
              <li key={idx} className="resume__item">
                <h4>{degree} - {institution}</h4>
                <span className="resume__period">{period}</span>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Animate>

      <Animate play duration={0.8} delay={0.6} start={{ opacity: 0, transform: 'translateY(20px)' }} end={{ opacity: 1, transform: 'translateY(0)' }}>
        <div className="resume__section">
          <h3 className="resume__section-title">Experience</h3>
          <ul className="resume__list">
            {experienceData.map(({ company, role, period, description }, idx) => (
              <li key={idx} className="resume__item">
                <h4>{role} - {company}</h4>
                <span className="resume__period">{period}</span>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Animate>
    </section>
  );
};

export default Resume;
