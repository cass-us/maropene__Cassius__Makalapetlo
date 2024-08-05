import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/pageHeaderContent/index.jsx";
import { Animate } from "react-simple-animate";
import {DiApple ,DiGit} from 'react-icons/di';
import {FaDev , FaDatabase} from 'react-icons/fa';
import './styles.scss'

const personalDetails = [
  { label: "First Name", value: "Maropene" },
  { label: "Last Name", value: "Makalapetlo" },
  { label: "Email", value: "cassiusmaropene@gmail.com" },
  { label: "Mobile Number", value: "+27827612678" },
  { label: "Country", value: "South Africa" },
];

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
      <div className="about__content__personalWrapper">

      <Animate
          play
          duration={1.5}
          delay={1.5}
          start={{
            transform: "translateY(500px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}
        >
          <h3>Software Developer</h3>
          <p>Ambitious Information Technology graduate student completed diploma in
             Information Technology and pursuing real-world experience to develop acquired
             skills. Offering strong understanding of device configuration, networking protocols
             and operating system specifications. Proficientin Java and eager to learn new
             processes, programs and procedures quickly to maximize contributions to user,
             team and business success. Quality-driven and self-motivated individual with a
             superior work ethic and diligentnature..</p>
        <h3  className="personalInformationHeaderText">Personal Information</h3>
        <ul>
          {personalDetails.map((item, i) => (
            <li key={i}>
              <span className="title">{item.label}: </span>
              <span className="value">{item.value}</span>
            </li>
          ))}
        </ul>
        </Animate>

      </div>
      
      <div className="about__content__servicesWrapper">
      <Animate
          play
          duration={1.5}
          delay={1.5}
          start={{
            transform: "translateY(500px)",
          }}
          end={{
            transform: "translateY(0px)",
          }}
        >

       <div className="about__content__servicesWrapper__innerContent">

        <div>
       <FaDev size={60} color="var(--yellow-theme-main-color)" />
       </div>
       <div>
        <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
       </div>
       <div>
        <DiGit size={60} color="var(--yellow-theme-main-color)" />
       </div>
       <div>
        <DiApple size={60} color="var(--yellow-theme-main-color)" />
       </div>
</div>
</Animate>
      </div>
       </div>
    </section>
  );
};

export default About;
