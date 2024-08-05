import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../Components/pageHeaderContent';
import { Line } from 'rc-progress';
import { AnimateKeyframes } from 'react-simple-animate';
import './styles.scss';

const skilldata = [
  {
    label: "FRONT END",
    data: [
      { skillName: "HTML5", percentage: "90" },
      { skillName: "CSS3", percentage: "70" },
      { skillName: "React.js", percentage: "80" },
    ],
  },
  {
    label: "BACK END",
    data: [
      { skillName: "Node.js", percentage: "75" },
      { skillName: "Java", percentage: "90" },
      { skillName: "C#", percentage: "65" },
    ],
  },
  {
    label: "DATABASE",
    data: [
      { skillName: "MySQL", percentage: "80" },
      { skillName: "PostgreSQL", percentage: "75" },
      { skillName: "SQLite", percentage: "70" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='skills__content__wrapper'>
        {skilldata.map((item, index) => (
          <div key={index} className='skills__content__wrapper__inner-content'>
            <AnimateKeyframes
              play
              duration={1}
              keyframes={['opacity: 1', 'opacity: 0']}
              iterationCount="1"
            >
              <h3 className='skills__content__wrapper__inner-content__category-text'>{item.label}</h3>
              <div>
                {item.data.map((skillItem, x) => (
                  <div className="progressWrapper" key={x}>
                    <p>{skillItem.skillName}</p>
                    <Line
                      percent={skillItem.percentage}
                      strokeWidth="2"
                      strokeColor="var(--yellow-theme-main-color)"
                      trailWidth={4}
                      strokeLinecap="square"
                    />
                  </div>
                ))}
              </div>
            </AnimateKeyframes>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
