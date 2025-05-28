import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Components/pageHeaderContent/index.jsx";
import { Animate } from "react-simple-animate";
import { DiApple, DiGit } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
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

        <Animate
          play
          duration={1.2}
          delay={0.5}
          start={{ opacity: 0, transform: "translateY(50px)" }}
          end={{ opacity: 1, transform: "translateY(0)" }}
        >
          <div className="about__content__personalWrapper">
            <h3>Software Developer</h3>
            <p>
              Ambitious Information Technology graduate student completed diploma in
              Information Technology and pursuing real-world experience to develop acquired
              skills. Offering strong understanding of device configuration, networking protocols
              and operating system specifications. Proficient in Java and eager to learn new
              processes, programs and procedures quickly to maximize contributions to user,
              team and business success. Quality-driven and self-motivated individual with a
              superior work ethic and diligent nature.
            </p>

            <h3 className="personalInformationHeaderText">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}: </span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Animate>

        <div className="about__content__servicesWrapper">
          {[
            { icon: <FaDev size={60} />, key: "dev" },
            { icon: <FaDatabase size={60} />, key: "database" },
            { icon: <DiGit size={60} />, key: "git" },
            { icon: <DiApple size={60} />, key: "apple" },
          ].map(({ icon, key }, idx) => (
            <Animate
              key={key}
              play
              duration={1}
              delay={1 + idx * 0.3} // Stagger animations
              start={{ opacity: 0, transform: "translateY(30px)" }}
              end={{ opacity: 1, transform: "translateY(0)" }}
            >
              <div
                className="about__content__servicesWrapper__innerContent__icon"
                style={{ color: "var(--yellow-theme-main-color)" }}
              >
                {icon}
              </div>
            </Animate>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
